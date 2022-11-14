import React from "react";
import { useNavigate } from "react-router-dom";
import { NotFoundStyle } from "./styled";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <NotFoundStyle>
      <div className="flex-container">
        <div className="text-center">
          <h1>
            <span className="fade-in" id="digit1">
              4
            </span>
            <span className="fade-in" id="digit2">
              0
            </span>
            <span className="fade-in" id="digit3">
              4
            </span>
          </h1>
          <h3 className="fadeIn">TRANG KHÔNG TÌM THẤY</h3>
          <button type="button" name="button" onClick={handleBack}>
            Trở lại trang trước đó
          </button>
        </div>
      </div>
    </NotFoundStyle>
  );
};

export default NotFound;
