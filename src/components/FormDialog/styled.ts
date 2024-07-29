import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 12px;
  padding: 24px 32px;

  background: #fbfbfb;

  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  z-index: 1001;
`;

export const Titulo = styled.h2`
  font-weight: 600;
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

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;
