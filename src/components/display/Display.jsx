import React, { useState } from "react";
import { Select, Button, Modal } from "antd";

import "./Display.scss";
import { Power } from "../charts/GaugeChart";
import BarChart from "../charts/BarChart";
import HumidBarChart from "../charts/HumidBarChart";

const { Option } = Select;

function Display() {
  const [keyValue, setKeyValue] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (value) => {
    setKeyValue(value);
  };

  const handleCloseModal = () => {
    handleChange("");
    setIsSubmit(false);
  };

  const handleSubmitButton = () => {
    if (!keyValue) return;
    setIsSubmit(true);
  };
  return (
    <div className="container">
      <Select
        value={keyValue}
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
        <Button
          onClick={() => handleSubmitButton()}
          type="primary"
          disabled={!keyValue}
        >
          Xem
        </Button>
      </div>
      <div className="charts">
        <Modal
          open={keyValue === "Nhiệt độ" && isSubmit}
          onCancel={() => handleCloseModal()}
          onOk={() => handleCloseModal()}
          width="50vw"
        >
          <Power />
        </Modal>
        <Modal
          open={keyValue === "Độ ẩm" && isSubmit}
          onCancel={() => handleCloseModal()}
          onOk={() => handleCloseModal()}
          width="50vw"
        >
          <HumidBarChart />
        </Modal>
        <Modal
          open={keyValue === "Lượng mưa" && isSubmit}
          onCancel={() => handleCloseModal()}
          onOk={() => handleCloseModal()}
          width="50vw"
        >
          <BarChart />
        </Modal>
      </div>
    </div>
  );
}

export default Display;
