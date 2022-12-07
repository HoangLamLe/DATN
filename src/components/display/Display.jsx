import React, { useState } from "react";
import { Select, Button, Modal, message, Popconfirm, Input } from "antd";

import "./Display.scss";
import { Power } from "../charts/GaugeChart";
import BarChart from "../charts/BarChart";
import HumidBarChart from "../charts/HumidBarChart";
import { getLocalStorage, setLocalStorage } from "../../utils";

const { Option } = Select;

function Display() {
  const [keyValue, setKeyValue] = useState("");
  const [key, setKey] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [existKey, setExistKey] = useState(getLocalStorage("key"));

  const handleChange = (value) => {
    setKeyValue(value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleSetKey = () => {
    setLocalStorage("key", key);
    setExistKey(key);
    setKey("");
  };

  const handleCloseModal = () => {
    handleChange("");
    setIsSubmit(false);
  };

  const handleSubmitButton = () => {
    if (!keyValue) return;
    setIsSubmit(true);
  };

  const onConfirm = () => {
    if (!keyValue) return;
    localStorage.setItem("viewer", keyValue);
  };
  return (
    <div className="display-container">
      <div>
        <div>Chọn dạng biểu đồ muốn hiển thị</div>
        <Select
          value={keyValue}
          size="large"
          placeholder="Chọn biểu đồ dữ liệu muốn hiển thị"
          onSelect={handleChange}
        >
          <Option value="gauge">Gauge</Option>
          <Option value="Độ ẩm">Độ ẩm</Option>
          <Option value="bar">Biểu đồ cột</Option>
        </Select>
        <div>Nhập key muốn hiển thị</div>
        <Input
          className="key-input"
          placeholder="Nhập key tại đây"
          value={key}
          onChange={handleKeyChange}
        ></Input>
        <Button type="primary" onClick={handleSetKey}>
          Thiết lập key
        </Button>
      </div>

      <div className="key-value">
        <label className="label">Dạng biểu đồ đang được chọn: </label>
        {keyValue ? keyValue : "Chưa chọn dạng biểu đồ"}
      </div>
      <div className="key-value">
        <label className="label">Key đang được sử dụng là: </label>
        {existKey || "Chưa có key được lưu"}
      </div>
      <div className="submit-button">
        <Button
          onClick={() => handleSubmitButton()}
          type="primary"
          disabled={!keyValue}
        >
          Xem
        </Button>
        <Popconfirm
          title={<div>Bạn có chắc chặn chọn {keyValue} để user xem</div>}
          onConfirm={onConfirm}
          okText="Chắc chắn"
          cancelText="Huỷ"
        >
          <Button disabled={!keyValue} type="primary" className="btn-set-view">
            Chọn dạng biểu đồ user được xem
          </Button>
        </Popconfirm>
      </div>
      <div className="charts">
        <Modal
          open={keyValue === "gauge" && isSubmit}
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
          open={keyValue === "bar" && isSubmit}
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
