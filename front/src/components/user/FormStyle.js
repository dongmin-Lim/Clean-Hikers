import { Button, Form, Input } from "antd";
import styled from "styled-components";

export const FormBlock = styled(Form)`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  max-width: 650px;
  width: 50%;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 40px;
  background: #ffffffed;
  box-shadow: 2px 3px 5px 0px;
  padding: 1rem 0 2rem 0;
  .ant-form-item {
    margin: 0;
    padding: 0;
  }
  .toRegister {
    margin-bottom: 5rem;
  }
  .informationText {
    display: inline-block;
    width: 60%;
    margin: 0 auto;
    font-size: 0.8rem;
    text-align: start;
    letter-spacing: -1px;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .error {
    color: red;
  }
`;

export const TitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 2rem auto;
  margin-bottom: 3rem;
  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
  span {
    font-size: 0.8rem;
  }
`;

export const InputBlock = styled(Input)`
  width: 60%;
  margin-bottom: 1rem;
  height: 50px;
  border-radius: 10px;
  background: inherit;
  outline: none;
  input {
    background: transparent;
  }
`;

export const ButtonBlock = styled(Button)`
  width: 60%;
  display: block;
  margin: 1rem auto;
  border: 1px solid green;
  border-radius: 15px;
  height: 50px;
  background: transparent;
`;

export const EmailBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  margin: 0 auto;
  .ant-form-item {
    margin-bottom: 0;
    width: 70%;
    .registerEmail {
      width: 100%;
    }
  }

  button {
    width: 25%;
    height: 50px;
    margin-bottom: 1rem;
    border-radius: 10px;
    box-sizing: inherit;
    cursor: pointer;
    background: transparent;
  }
`;
