import React, { useEffect, useState } from "react";
import { Button, Empty, Popconfirm } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import { Power } from "../charts/GaugeChart";
import BarChart from "../charts/BarChart";
import HumidBarChart from "../charts/HumidBarChart";

import { getLocalStorage, removeLocalStorage } from "../../utils";

import "./Viewer.scss";

function Viewer() {
  const navigate = useNavigate();

  useEffect(() => {
    const keyValue = getLocalStorage("viewer");
    setValue(keyValue);
  }, []);

  const [value, setValue] = useState("");

  const onConfirmLogOut = async () => {
    await removeLocalStorage("role");
    await navigate("/");
  };

  return (
    <div className="viewer-container">
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
        {value === "Độ ẩm" && <HumidBarChart />}
        {value === "Nhiệt độ" && <Power />}
        {value === "Lượng mưa" && <BarChart />}
        {!value && (
          <>
            <Empty description="Chưa có dữ liệu hoặc quản trị viên chưa cài đặt giá trị được xem bởi user" />
          </>
        )}
      </div>
    </div>
  );
}

export default Viewer;
