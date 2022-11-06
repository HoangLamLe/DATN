import {
  ContainerOutlined,
  DesktopOutlined,
  HomeOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Menu, Modal } from "antd";
import "antd/dist/antd.css";
import "./App.scss";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

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
  getItem("Trang chủ", "/home", <HomeOutlined />),
  getItem("Hiển thị", "/display", <DesktopOutlined />),
  getItem("Điều khiển", "/monitor", <ContainerOutlined />),
  getItem("Đăng xuất", "/", <LogoutOutlined />),
];

const App = () => {
  useEffect(() => {
    setKey(location.pathname);
  }, []);

  const [key, setKey] = useState("/home");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    setIsOpenModal(true);
  };

  return (
    <div className="container" style={{ display: "flex" }}>
      <Menu
        style={{ width: "16vw", height: "100vh" }}
        onClick={({ key }) => {
          if (key === "/") {
            handleLogout();
            return;
          }
          if (key && key !== "/") {
            navigate(key);
          }
        }}
        defaultSelectedKeys={location.pathname}
        mode="inline"
        theme="dark"
        items={items}
      />
      <Outlet />
      <Modal
        open={isOpenModal}
        onCancel={() => setIsOpenModal(false)}
        onOk={() => navigate("/")}
        okText="Chắc chắn"
        cancelText="Huỷ"
        width="50vw"
      >
        Bạn có chắc chắn muốn đăng xuất
      </Modal>
    </div>
  );
};

export default App;
