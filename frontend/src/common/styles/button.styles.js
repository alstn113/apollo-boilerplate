import styled from "styled-components";

export const Button = styled.button`
  background: #f1356d;
  color: #fff;
  border: 0;
  padding: 8px;
  border-radius: 8px;
  & + & {
    margin-left: 10px;
  }
`;
