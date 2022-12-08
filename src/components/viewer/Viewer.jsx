import React, { useEffect, useState } from "react";
import { Button, Divider, Empty, Popconfirm, Row } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Power } from "../charts/GaugeChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import PieChart from "../charts/PieChart";
import ScatterChart from "../charts/ScatterChart";

import { getLocalStorage, removeLocalStorage } from "../../utils";

import "./Viewer.scss";

function Viewer() {
  const navigate = useNavigate();

  useEffect(() => {
    const keyValue = getLocalStorage("viewer");
    const existHeader = getLocalStorage("header");
    setValue(keyValue);
    setHeader(existHeader);
  }, []);

  const [value, setValue] = useState("");
  const [header, setHeader] = useState("");

  const onConfirmLogOut = async () => {
    await removeLocalStorage("role");
    await navigate("/");
  };

  return (
    <div className="viewer-container">
      <h1 className="viewer-header">
        {header ? header : "Tên hệ thống chưa được admin thiết lập"}
      </h1>
      <div className="viewer-log-out">
        <Popconfirm
          title="Bạn có muốn đăng xuất không"
          onConfirm={onConfirmLogOut}
          okText="Đồng ý"
          cancelText="Không"
        >
          <Button type="danger" icon={<LogoutOutlined />}>
            Đăng xuất
          </Button>
        </Popconfirm>
      </div>
      <div className="viewer-content">
        {/* {value === "line" && <LineChart />}
        {value === "gauge" && <Power />}
        {value === "bar" && <BarChart />}
        {value === "pie" && <PieChart />}
        {value === "scatter" && <ScatterChart />}
        {!value && (
          <>
            <Empty description="Chưa có dữ liệu hoặc quản trị viên chưa cài đặt giá trị được xem bởi user" />
          </>
        )} */}
        <Divider />
        <Row className="chart-item">
          <LineChart />
        </Row>
        <Divider />

        <Row className="chart-item">
          <div className="gauge-header">
            Biểu đồ dạng Gauge hiện thông số mới nhất
          </div>
          <Power />
        </Row>
        <Divider />

        <Row className="chart-item">
          <BarChart />
        </Row>
        <Divider />

        <Row className="chart-item">
          <PieChart />
        </Row>
        <Divider />

        <Row className="chart-item">
          <ScatterChart />
        </Row>
      </div>
    </div>
  );
}

export default Viewer;
