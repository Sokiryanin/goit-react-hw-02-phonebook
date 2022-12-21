import styled from '@emotion/styled';

export const Form = styled.form`
  flex-direction: column;
  gap: 20px;
  padding: 10px 10px;
  border: 1px solid grey;
`;

export const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 10px;
`;

export const Input = styled.input`
  margin-botoom: 10px;
  width: 400px;
`;

export const Button = styled.button`
  background-color: #fff;
  padding: 8px 16px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  :hover {
    background-color: gray;
    color: #fff;
`;
