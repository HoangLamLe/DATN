import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";

import schema from "./schema";

import { Container, FormItem, Form, SubmitItem } from "./styled.js";

function LoginScreen() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema()),
  });

  const onSubmitHandler = (data) => {
    if (!data) return;
    if (data.user === "admin") {
      navigate("/home");
    }
    if (data.user === "user") {
      navigate("/viewer");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1 className="form-title">Đăng nhập</h1>
        <FormItem>
          <label className="form-label">Tên đăng nhập</label>
          <input
            className="form-input"
            placeholder="Nhập tên đăng nhập ..."
            {...register("user")}
          />
          <p className="error-message">{errors.user?.message}</p>
        </FormItem>
        <FormItem>
          <label className="form-label">Mật khẩu</label>
          <input
            className="form-input"
            placeholder="Nhập mật khẩu ..."
            type="password"
            {...register("password")}
          />
          <p className="error-message">{errors.password?.message}</p>
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
