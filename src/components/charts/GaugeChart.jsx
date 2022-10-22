import GaugeChart from "react-gauge-chart";
import ReactSpeedometer from "react-d3-speedometer";

import "./GaugeChart.scss";

export function Power(props) {
  return (
    <div className="gauge-container">
      <ReactSpeedometer
        width={500}
        height={500}
        minValue={-50}
        maxValue={120}
        value={50}
        customSegmentStops={[-50, 0, 20, 45, 100, 120]}
        segmentColors={["#AFEEEE", "blue", "#00ff00", "yellow", "red"]}
        needleColor="rgb(19 6 84 / 40%)"
        needleHeightRatio={0.9}
        currentValueText={'Nhiệt độ : ${value} °C'}
        paddingVertical={15}
        forceRender={true}
      />
    </div>
  );
}
