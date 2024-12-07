import { ComponentProps } from "react";
import styled from "styled-components";

interface ButtonSearchProps extends ComponentProps<"button"> {}

const StyledButton = styled.button`
  background-color: rgb(16, 185, 129);
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: rgb(14, 163, 115);
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export function ButtonSearch(props: ButtonSearchProps) {
  return (
    <StyledButton {...props} type="submit">
      {props.children || "Pesquisar"}
    </StyledButton>
  );
}
