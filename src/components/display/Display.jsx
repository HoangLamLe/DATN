import React, { useState } from "react";
import { Select, Button } from "antd";

import "./Display.scss";
import { Power } from "../charts/GaugeChart";

const { Option } = Select;

function Display() {
  const [keyValue, setKeyValue] = useState("");

  const handleChange = (value) => {
    setKeyValue(value);
  };

  const handleSubmitButton = () => {
    console.log("Data submit", keyValue);
  };
  return (
    <div className="container">
      <Select
        size="large"
        placeholder="Chọn dữ liệu muốn hiển thị"
        onSelect={handleChange}
      >
        <Option value="Nhiệt độ">Nhiệt độ</Option>
        <Option value="Độ ẩm">Độ ẩm</Option>
        <Option value="Lượng mưa">Lượng mưa</Option>
      </Select>
      <div className="key-value">
        <label className="label">Key value: </label>
        {keyValue ? keyValue : "Chưa chọn key value"}
      </div>
      <div className="submit-button">
        <Button onClick={() => handleSubmitButton()} type="primary">
          Xem
        </Button>
      </div>
      <div className="charts">
        <Power />
      </div>
    </div>
  );
}

export default Display;
