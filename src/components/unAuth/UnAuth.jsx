import React from "react";
import { useNavigate } from "react-router-dom";
import { UnAuthStyle } from "./styled";

const UnAuth = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <UnAuthStyle>
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
              1
            </span>
          </h1>
          <h3 className="fadeIn">BẠN KHÔNG CÓ QUYỀN TRUY CẬP TRANG NÀY</h3>
          <button type="button" name="button" onClick={handleBack}>
            Trở lại trang trước đó
          </button>
        </div>
      </div>
    </UnAuthStyle>
  );
};

export default UnAuth;
