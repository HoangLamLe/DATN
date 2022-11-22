import { axiosInstance } from './API';
import { CATEGORIES } from './constants';

async function fetchCategories(params) {
  return await axiosInstance.get(CATEGORIES.FETCH_CATEGORIES, {
    params,
  });
}
export { fetchCategories };
