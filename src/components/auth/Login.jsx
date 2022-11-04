import React from "react";
import { Container, FormItem, Form, SubmitItem } from "./styled.js";

function LoginScreen() {
  return (
    <Container>
      <Form>
        <h1 className="form-title">Đăng nhập</h1>
        <FormItem>
          <label className="form-label">Tên dăng nhập</label>
          <input className="form-input" placeholder="Nhập tên đăng nhập ..." />
        </FormItem>
        <FormItem>
          <label className="form-label">Mật khẩu</label>
          <input
            className="form-input"
            placeholder="Nhập mật khẩu ..."
            type="password"
          />
        </FormItem>

        <SubmitItem className="submit-item">
          <button className="submit-button" type="submit">
            Đăng nhập
          </button>
        </SubmitItem>
      </Form>
    </Container>
  );
}

export default LoginScreen;
