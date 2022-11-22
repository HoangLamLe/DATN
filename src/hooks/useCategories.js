import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { useInjectReducer, useInjectSaga } from "../utils";
import reducer from "../store/categories/reducer";
import saga from "../store/categories/saga";
import { LIMIT_CATEGORIES, PAGE } from "../store/constants";
import { fetchCategoriesRequest } from "../store/categories/action";
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectCategories,
} from "../store/categories/selector";

export const useCategories = () => {
  useInjectSaga({ key: "categoriesStore", saga });
  useInjectReducer({ key: "categoriesStore", reducer });

  const dispatch = useDispatch();

  const isLoading = useSelector(makeSelectLoading());
  const error = useSelector(makeSelectError());
  const categories = useSelector(makeSelectCategories());

  // const [params, setParams] = useState({
  //   page: PAGE,
  //   limit: LIMIT_CATEGORIES,
  // });

  const fetchCategoriesFunc = async () => {
    await dispatch(fetchCategoriesRequest());
  };

  useEffect(() => {
    fetchCategoriesFunc();
  }, []);

  return {
    isLoading,
    error,
    categories,
    fetchCategoriesFunc,
    // setParams,
    // params,
  };
};
