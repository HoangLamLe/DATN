import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage } from "../../utils";

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Biểu đồ hình tròn",
    },
  },
};

export default function PieChart() {
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
        backgroundColor: [
          "red",
          "green",
          "blue",
          "magenta",
          "purple",
          "orange",
          "yellow",
          "rose",
          "pink",
          "azure",
        ],
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
        <Pie
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
