// BackButton.js
import React from "react";
import { Button } from "@innovaccer/design-system";
import { useNavigate, useLocation } from "react-router-dom";
import '../style/backbtn.css';

const BackButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    if (location.key !== "default") {
      // If there's history, go back
      navigate(-1);
    } else {
      // If not (like on first page load), go to home
      navigate("/");
    }
  };

  return (
    <div>
      <Button onClick={handleBack} appearance = "transparent">Back</Button >
    </div>
  );
};

export default BackButton;
