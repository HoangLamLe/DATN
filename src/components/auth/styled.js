import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  color: #333;
  font-family: sans-serif;
  text-align: center;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(100, 121, 9, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );

  .form-title {
    margin: auto;
    font-size: 32px;
    width: 100%;
    font-weight: bold;
  }

  .form-label {
    color: #393333;
    display: block;
    font-size: 16px;
    margin-bottom: 4px;
  }

  .form-input {
    color: #333;
  }

  .error-message {
    color: #d41a1a;
    font-size: 12px;
    margin: 4px 0 8px 0;
  }

  .submit-item {
    margin: 12px 0;

    .submit-button {
      outline: none;
      border-radius: 8px;
      background: linear-gradient(
        90deg,
        rgba(131, 58, 180, 1) 0%,
        rgba(253, 29, 29, 1) 50%,
        rgba(252, 176, 69, 1) 100%
      );
      padding: 13px 0px;
      width: 100%;
      color: #ffffff;
      border: none;
      font-size: 20px;
      cursor: pointer;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .link {
    margin: 0;
    text-align: center;
    width: 100%;
    height: 20px;

    .link-navigate {
      color: blue;
    }
  }
`;

const Form = styled.form`
  padding: 6px 12px;
  box-shadow: 5px 5px 8px #888;
  border-radius: 10px;
  display: block;
  margin: 10px auto 0;
  text-align: left;
  width: 54vw;
  background-color: #fff;

  @media (min-width: 740px) and (max-width: 1023px) {
    width: 80vw;
  }

  @media (max-width: 739px) {
    width: 96vw;
  }
`;

const FormItem = styled.div`
  margin: 10px 0;

  .form-input {
    width: 100%;
    height: 32px;
    border: 1.2px solid #ccc;
    border-radius: 6px;
    outline-color: red;

    @media (max-width: 739px) {
      height: 44.8px;
      font-size: 16px;
    }
  }
`;

const SubmitItem = styled.div`
  margin: 12px 0;

  @media (max-width: 739px) {
    .link {
      height: 24px;
      font-size: 16px;
    }
  }
`;

export { Container, FormItem, SubmitItem, Form };
