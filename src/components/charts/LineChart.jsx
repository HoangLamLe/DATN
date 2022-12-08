import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage } from "../../utils";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ dạng đường thẳng",
    },
  },
};

export default function LineChart() {
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
        <Line
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
