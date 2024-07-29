import styled from "styled-components";

export const ButtonFormNovaTarefa = styled.button`
  display: flex;
  padding: 12px 16px;

  align-items: center;
  justify-content: center;
  gap: 8px;

  width: 100%;

  background-color: #efefef;
  color: #414141;
  border-radius: 8px;
  border: none;

  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  width: 100%;
`;

export const TextArea = styled.textarea`
  padding: 8px 12px;
  font-size: 16px;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  width: 100%;
`;

export const CriarTarefaButton = styled.button`
  color: #fff;

  font-size: 16px;
  font-weight: 500;
  padding: 10px 12px;
  border-radius: 8px;

  max-width: 200px;

  background: #222;
`;
