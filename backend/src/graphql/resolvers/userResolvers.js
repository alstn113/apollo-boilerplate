import User from "../../models/user";

export default {
  Query: {},
  Mutation: {
    register: async (_, args, context) => {
      try {
        const { username, password } = args.userInput;
        const exUser = await User.findByUsername(username);
        if (exUser) {
          throw new Error("User exists already.");
        }
        const user = new User({ username });
        await user.setPassword(password);
        await user.save();
        const token = user.generateToken();
        context.res.cookie("access_token", token, { maxAge: 1000 * 60 * 60 * 24 * 7, httpOnly: true });
        return user;
      } catch (error) {
        throw error;
      }
    },
  },
};
