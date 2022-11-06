import * as yup from "yup";

const schema = () =>
  yup.object().shape({
    user: yup
      .string()
      .required("Bắt buộc nhập trường này")
      .max(50, "Tối đa 50 ký tự"),
    password: yup
      .string()
      .required("Bắt buộc nhập trường này")
      .min(6, "Tối thiểu 6 ký tự")
      .max(16, "Tối đa 16 ký tự"),
  });

export default schema;
