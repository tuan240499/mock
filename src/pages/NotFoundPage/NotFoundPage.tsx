import React from "react";
import "./NotFoundPage.css";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div id="error">
      <div className="img-error">
        <img src="https://canifa.com/assets/error.svg" alt="" />
      </div>
      <div className="content-error">
        <h1>Chúng tôi không thể tìm thấy trang</h1>
        <div>
          Rất tiếc, chúng tôi không thể tìm thấy trang bạn đang tìm kiếm.
        </div>
      </div>
      <div className="button-error">
        <button onClick={() => navigate("/")}>Quay lại</button>
      </div>
    </div>
  );
};

export default NotFoundPage;
