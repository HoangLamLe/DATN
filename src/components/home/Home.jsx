import { Button, Col, Input, message, Row } from "antd";
import React from "react";
import { useCategories } from "../../hooks/useCategories";
import { getLocalStorage, setLocalStorage } from "../../utils";
import "./Home.scss";

function Home() {
  const { categories, isLoading, fetchCategoriesFunc } = useCategories();
  console.log("categories", categories?.data?.entries);
  console.log("loading", isLoading);

  const [token, setToken] = React.useState("");
  const [existToken, setExistToken] = React.useState(
    getLocalStorage("USER_TOKEN")
  );

  const handleTokenChange = (e) => {
    setToken(e.target.value);

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

  const handleTestAPI = async () => {
    await fetchCategoriesFunc();
    if (categories?.data?.entries === undefined) {
      await message.error("API chưa trả về dữ liệu, đề nghị nhập đúng token");
      return;
    }
    await message.success("API trả về dữ liệu thành công");
  };

  return (
    <div className="home-container">
      <Row>
        <Col span={24}>
          <h1 className="home-title">Welcome to IOT web app</h1>
          <Input
            placeholder="Nhập token"
            value={token}
            onChange={handleTokenChange}
          ></Input>

          <Button type="primary" onClick={handleSetToken}>
            Nhập token để lấy được dữ liệu cần thiết
          </Button>
          <div className="exist-token">
            Token đang được sử dụng là: {existToken}
          </div>
          <Button type="primary" onClick={handleTestAPI}>
            Test thử API
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
