import { ComponentProps, forwardRef } from "react";
import styled from "styled-components";
import searchIcon from "../../assets/searchIcon.svg";

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  transition: box-shadow 0.2s, border-color 0.2s;

  &:focus-within {
    border-color: #007bff;
    box-shadow: 0 0 4px rgba(0, 123, 255, 0.6);
  }

  @media (max-width: 600px) {
    padding: 6px;
    gap: 6px;
  }

  @media (max-width: 400px) {
    padding: 4px;
    gap: 4px;
  }
`;

const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
  color: #aaa;

  @media (max-width: 600px) {
    width: 14px;
    height: 14px;
  }

  @media (max-width: 400px) {
    width: 12px;
    height: 12px;
  }
`;

const InputSearchStyled = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  background-color: transparent;
  padding: 0.5rem;

  @media (max-width: 600px) {
    font-size: 14px;
  }

  @media (max-width: 400px) {
    font-size: 12px;
  }
`;

interface InputSearchProps extends ComponentProps<"input"> {}

export const InputSearch = forwardRef<HTMLInputElement, InputSearchProps>(
  ({ ...props }, ref) => {
    return (
      <InputWrapper>
        <SearchIcon src={searchIcon} alt="Search Icon" />
        <InputSearchStyled {...props} ref={ref} />
      </InputWrapper>
    );
  }
);

InputSearch.displayName = "InputSearch";