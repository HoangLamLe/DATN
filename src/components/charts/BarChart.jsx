import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage } from "../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ cột",
    },
  },
};

export default function BarChart() {
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();
  const key = getLocalStorage("key").toString();
  const key2 = getLocalStorage("key2").toString();
  const rain = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON)[key]
  );
  const labels = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON)[key2]
  );
  let data = {
    labels,
    datasets: [
      {
        label: `Giá trị của key: ${key}`,
        data: rain,
        backgroundColor: "#1890ff",
      },
    ],
  };

  console.log(
    "categories",
    categories?.data?.entries.map((item) => JSON.parse(item.objectJSON))
  );
  console.log("loading", isLoading);

  return (
    <>
      {rain || labels ? (
        <Bar
          options={options}
          data={data}
          fallbackContent={<>Chưa có dữ liệu từ API</>}
        />
      ) : (
        <>Không có dữ liệu từ API</>
      )}
    </>
  );
}
