import styled from "styled-components";

export const ButtonWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const IconeButton = styled.button`
  border: unset;
  background: unset;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 4px 4px;
  border-radius: 12px;

  &:hover {
    color: white;
    background: #f1f1f1;
  }

  svg {
    color: #656565;
    font-size: 16px;
  }
`;

export const DropdownMenu = styled.div<{ exibir: boolean }>`
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 1;

  padding: 6px 0px;
  border-radius: 8px;

  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  & > div {
    padding: 8px 28px;
    cursor: pointer;

    &:hover {
      background-color: #f1f1f1;
    }
  }
`;
