import React from "react";
import "./loadingStyles.scss";

const Loading = () => {
  return (
    <div className="col-12 mt-2 mb-5">
      <div className="loader-container">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loading;
