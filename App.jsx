import React from "react";
import "./app.css"; 
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/products");
  };

  return (
    <div className="landing-page">
      {/* اسم الشركة */}
      <h1 className="company-name"> Paradise Nursery </h1>

      <p className="company-description">
        Paradise Nursery 
      </p>

      {/* زر ابدأ الآن */}
      <button className="start-button" onClick={handleStartClick}>
        ابدأ الآن
      </button>
    </div>
  );
};

export default App;
