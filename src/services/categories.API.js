import { getLocalStorage } from "../utils";
import { axiosInstance } from "./API";

async function fetchCategories(params) {
  return await axiosInstance.get(getLocalStorage("API"), {
    params,
  });
}
export { fetchCategories };
