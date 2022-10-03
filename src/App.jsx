import {
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Content from "./components/Content";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Trang chủ", "/", <HomeOutlined />),
  getItem("Hiển thị", "/display", <DesktopOutlined />),
  getItem("Điều khiển", "/monitor", <ContainerOutlined />),
];

const App = () => {
  useEffect(() => {
    setKey(location.pathname);
  }, []);

  const [key, setKey] = useState("/");

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="container" style={{ display: "flex" }}>
      <Menu
        style={{ width: "16vw", height: "100vh" }}
        onClick={({ key }) => {
          if (key) {
            navigate(key);
          }
        }}
        defaultSelectedKeys={location.pathname}
        mode="inline"
        theme="dark"
        items={items}
      />
      <Content />
    </div>
  );
};

export default App;
