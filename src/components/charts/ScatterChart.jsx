import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Scatter } from "react-chartjs-2";

import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage } from "../../utils";

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

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
      text: "Biểu đồ dạng tán",
    },
  },
};

export default function ScatterChart() {
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
    datasets: [
      {
        label: "Giá trị",
        data: Array.from({ length: 100000 }, () => ({
          x: rain,
          y: labels,
        })),
        backgroundColor: "blue",
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
        <Scatter
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
