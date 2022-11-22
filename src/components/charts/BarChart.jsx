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
      text: "Biểu đồ lượng mưa",
    },
  },
};

export default function BarChart() {
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();
  const rain = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON).Rain
  );
  const rainOBS = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON).Rain_OBS
  );
  const labels = categories?.data?.entries?.map(
    (item) =>
      `${JSON.parse(item.objectJSON).Hours} giờ ${
        JSON.parse(item.objectJSON).Mins
      } phút`
  );
  const data = {
    labels,
    datasets: [
      {
        label: "Lượng mưa tích luỹ theo ngày (mm)",
        data: rain,
        backgroundColor: "blue",
      },
      {
        label: "Lượng mưa tích luỹ theo các mốc thời gian trong ngày (mm)",
        data: rainOBS,
        backgroundColor: "green",
      },
    ],
  };

  console.log(
    "categories",
    categories?.data?.entries.map((item) => JSON.parse(item.objectJSON))
  );
  console.log("loading", isLoading);

  return (
    <Bar
      options={options}
      data={data}
      fallbackContent={<>Chưa có dữ liệu từ API</>}
    />
  );
}
