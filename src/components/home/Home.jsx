import { Button, Col, Divider, Input, message, Row } from "antd";
import React from "react";
import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage, setLocalStorage } from "../../utils";
import "./Home.scss";

function Home() {
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();
  console.log("categories", categories?.data?.entries);
  console.log("loading", isLoading);
  const rain = categories?.data?.entries?.map(
    (item) => JSON.parse(item.objectJSON).Rain
  );
  console.log("rain", rain);

  const [token, setToken] = React.useState("");
  const [API, setAPI] = React.useState("");
  const [header, setHeader] = React.useState("");
  const [existToken, setExistToken] = React.useState(
    getLocalStorage("USER_TOKEN")
  );
  const [existAPI, setExistAPI] = React.useState(getLocalStorage("API"));
  const [existHeader, setExistHeader] = React.useState(
    getLocalStorage("header")
  );

  const handleTokenChange = (e) => {
    setToken(e.target.value);

    console.log(e.target.value);
  };

  const handleAPIChange = (e) => {
    setAPI(e.target.value);

    console.log(e.target.value);
  };

  const handleHeaderChange = (e) => {
    setHeader(e.target.value);

    console.log(e.target.value);
  };

  const handleSetToken = () => {
    if (!token) {
      message.error("Chưa có token trong ô input");
      return;
    }

    setLocalStorage("USER_TOKEN", token);
    setExistToken(token);
    message.success("Nhập token thành công");
    location.reload();
  };

  const handleSetAPI = () => {
    if (!API) {
      message.error("Chưa có url API trong ô input");
      return;
    }

    setLocalStorage("API", API);
    setExistAPI(API);
    message.success("Nhập url API thành công");
    location.reload();
  };

  const handleSetHeader = () => {
    if (!header) {
      message.error("Chưa có tên hệ thống trong ô input");
      return;
    }

    setLocalStorage("header", header);
    setExistHeader(header);
    message.success("Nhập tên hệ thống thành công");
    location.reload();
  };

  const handleTestAPI = async () => {
    await fetchCategoriesFunc();
    if (categories?.data?.entries === undefined) {
      await message.error(
        "API chưa trả về dữ liệu, đề nghị nhập đúng token và url API"
      );
      return;
    }
    await message.success("API trả về dữ liệu thành công");
  };

  return (
    <div className="home-container">
      <Row>
        <Col span={24}>
          <h1 className="home-title">Kết nối với hệ thống IoT</h1>
          <h2>Thiết lập API, Token và Tên hệ thống</h2>
          <Input
            className="input"
            placeholder="Nhập url API"
            value={API}
            onChange={handleAPIChange}
          ></Input>

          <Button type="primary" onClick={handleSetAPI}>
            Nhập url API để lấy được dữ liệu cần thiết
          </Button>
          <div className="exist-token">
            url API đang được sử dụng là: {existAPI || "Chưa có token được lưu"}
          </div>
          <Divider></Divider>
          <Input
            className="input"
            placeholder="Nhập token"
            value={token}
            onChange={handleTokenChange}
          ></Input>

          <Button type="primary" onClick={handleSetToken}>
            Nhập token để lấy được dữ liệu cần thiết
          </Button>
          <div className="exist-token">
            Token đang được sử dụng là: {existToken || "Chưa có token được lưu"}
          </div>
          <Button type="primary" onClick={handleTestAPI}>
            Test thử API
          </Button>
          <Divider></Divider>
          <Input
            className="input"
            placeholder="Nhập tên hệ thống IoT"
            value={header}
            onChange={handleHeaderChange}
          ></Input>

          <Button type="primary" onClick={handleSetHeader}>
            Nhập vào tên hệ thống IoT
          </Button>
          <div className="exist-token">
            Tên hệ thống IoT hiện tại:{" "}
            {existHeader || "Chưa có tên hệ thống được lưu"}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
