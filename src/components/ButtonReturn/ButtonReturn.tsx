import { ComponentProps } from "react";
import styled from "styled-components";
import ArrowReturnIcon from "../../assets/arrowReturnIcon.svg";

interface ButtonReturnProps extends ComponentProps<"button"> {}

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 8px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateX(-5px);
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
  transition: transform 0.2s ease;

  ${StyledButton}:hover & {
    transform: scale(1.1);
  }
`;

const ButtonText = styled.span`
  font-size: 16px;
  color: rgb(16, 185, 129);
  font-weight: bold;

  &:hover {
    color: rgb(14, 163, 115);
  }
`;

export function ButtonReturn(props: ButtonReturnProps) {
  return (
    <StyledButton {...props}>
      <Icon src={ArrowReturnIcon} alt="Return Icon" />
      <ButtonText>Voltar</ButtonText>
    </StyledButton>
  );
}
