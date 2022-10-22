import React, { useState } from "react";
import { InputNumber, Switch } from "antd";
import "./Monitor.scss";

function Monitor() {
  const [Number, setNumber] = useState(0);
  const [onOff, setOnOff] = useState(true);
  const handleNumberChange = (value) => {
    setNumber(value);
    console.log("Value: ", value);
  };
  const handleOnOff = () => {
    console.log("is On", !onOff);
    setOnOff(!onOff);
  };
  return (
    <div className="monitor-container">
      <InputNumber
        min={0}
        defaultValue={Number}
        onChange={handleNumberChange}
      />
      <Switch checked={onOff} onChange={handleOnOff} />
      <div>{onOff ? "ĐÃ BẬT" : "ĐÃ TẮT"}</div>
    </div>
  );
}

export default Monitor;
