import React, { useState } from "react";
import { Select, Button, Modal, message, Popconfirm, Input, Spin } from "antd";

import "./Display.scss";
import { Power } from "../charts/GaugeChart";
import BarChart from "../charts/BarChart";
import HumidBarChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import ScatterChart from "../charts/ScatterChart";

import { getLocalStorage, setLocalStorage } from "../../utils";

import { useCategories } from "../../hooks/useCategories";

const { Option } = Select;

function Display() {
  const [keyValue, setKeyValue] = useState("");
  const [key, setKey] = useState("");
  const [key2, setKey2] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const [existKey, setExistKey] = useState(getLocalStorage("key"));
  const [existKey2, setExistKey2] = useState(getLocalStorage("key2"));

  const handleChange = (value) => {
    setKeyValue(value);
  };

  const handleKeyChange = (e) => {
    setKey(e.target.value);
  };

  const handleKeyChange2 = (e) => {
    setKey2(e.target.value);
  };

  const handleSetKey = () => {
    setLocalStorage("key", key);
    setExistKey(key);
    setKey("");
  };

  const handleSetKey2 = () => {
    setLocalStorage("key2", key2);
    setExistKey2(key2);
    setKey2("");
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
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();

  return (
    <div className="display-container">
      <Spin spinning={isLoading}>
        <div>
          <div>Chọn dạng biểu đồ muốn hiển thị</div>
          <Select
            value={keyValue}
            size="large"
            placeholder="Chọn biểu đồ dữ liệu muốn hiển thị"
            onSelect={handleChange}
          >
            <Option value="gauge">Gauge</Option>
            <Option value="line">Biểu đồ dạng đường thẳng</Option>
            <Option value="bar">Biểu đồ cột</Option>
            <Option value="pie">Biểu đồ hình tròn</Option>
            <Option value="scatter">Biểu đồ dạng tán</Option>
          </Select>
          <div>Nhập các key muốn hiển thị</div>
          <Input
            className="key-input"
            placeholder="Nhập key của trục x tại đây"
            value={key}
            onChange={handleKeyChange}
          ></Input>
          <Button type="primary" onClick={handleSetKey}>
            Thiết lập key của trục x
          </Button>
          <Input
            className="key-input"
            placeholder="Nhập key của trục y tại đây"
            value={key2}
            onChange={handleKeyChange2}
          ></Input>
          <Button type="primary" onClick={handleSetKey2}>
            Thiết lập key của trục y
          </Button>
        </div>

        <div className="key-value">
          <label className="label">Dạng biểu đồ đang được chọn: </label>
          {keyValue ? keyValue : "Chưa chọn dạng biểu đồ"}
        </div>
        <div className="key-value">
          <label className="label">Key của trục x đang được sử dụng là: </label>
          {existKey || "Chưa có key được lưu"}
        </div>
        <div className="key-value">
          <label className="label">Key của trục y đang được sử dụng là: </label>
          {existKey2 || "Chưa có key của trục y được lưu"}
        </div>
        <div className="submit-button">
          <Button
            onClick={() => handleSubmitButton()}
            type="primary"
            disabled={!keyValue}
          >
            Xem
          </Button>
          {/* <Popconfirm
            title={<div>Bạn có chắc chặn chọn {keyValue} để user xem</div>}
            onConfirm={onConfirm}
            okText="Chắc chắn"
            cancelText="Huỷ"
          >
            <Button
              disabled={!keyValue}
              type="primary"
              className="btn-set-view"
            >
              Chọn dạng biểu đồ user được xem
            </Button>
          </Popconfirm> */}
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
            open={keyValue === "line" && isSubmit}
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
          <Modal
            open={keyValue === "pie" && isSubmit}
            onCancel={() => handleCloseModal()}
            onOk={() => handleCloseModal()}
            width="50vw"
          >
            <PieChart />
          </Modal>
          <Modal
            open={keyValue === "scatter" && isSubmit}
            onCancel={() => handleCloseModal()}
            onOk={() => handleCloseModal()}
            width="50vw"
          >
            <ScatterChart />
          </Modal>
        </div>
      </Spin>
    </div>
  );
}

export default Display;
