import { useEffect, useState } from "react";
import ReactSpeedometer from "react-d3-speedometer";

import { useCategories } from "../../hooks/useCategories";

import { getLocalStorage } from "../../utils";

import "./GaugeChart.scss";

export function Power() {
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();
  const [isHaveData, setIsHaveData] = useState(false);

  console.log("categories", categories);

  const key = getLocalStorage("key").toString();

  const rain = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON)[key]
  );

  console.log("rain", rain);

  useEffect(() => {
    if (rain && key) {
      setIsHaveData(true);
    }
  }, [rain, key]);

  return (
    <div className="gauge-container">
      {isHaveData ? (
        <ReactSpeedometer
          width={400}
          height={250}
          minValue={0}
          value={rain[0]}
          segmentColors={["#AFEEEE", "blue", "#00ff00", "yellow", "red"]}
          needleColor="rgb(19 6 84 / 40%)"
          needleHeightRatio={0.9}
          paddingVertical={15}
          forceRender={true}
          currentValueText={"Giá trị mới nhất : ${value} "}
        />
      ) : (
        <>Không có dữ liệu từ API ! Hãy nhập đúng key và API cũng như Token</>
      )}
    </div>
  );
}
