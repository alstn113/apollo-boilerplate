import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Header from "../header/header";
import Home from "../../pages/home/home";
import PostList from "../../pages/postList/postList";
import PostDetail from "../../pages/postDetail/postDetail";
import CreatePost from "../../pages/createPost/createPost";
import NotFound from "../../pages/notFound/notFound";

import "./app.css";
import "../../common/styles";
import client from "../../common/apollo-client";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/posts">
            <PostList />
          </Route>
          <Route exact path="/posts/:_id">
            <PostDetail />
          </Route>
          <Route exact path="/create-post">
            <CreatePost />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
