import React from "react";
import salmon from "../../assets/salmon.jpg";
import { Link } from "react-router-dom";

const AdBanner = () => {
  return (
    <div
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.8)),
          url(${salmon})`,
        backgroundSize: "cover",
        height: "300px",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            color: "white",
            padding: "30px 0px 0px 0px"
          }}
        >New Recipe</h3>
        <h1
          style={{
            color: "orange",
            fontSize: "42px",
            padding: "20px 0px"
          }}
        >Pineapple Salmon</h1>
        <h3
          style={{
            color: "white",
            width: "500px",
            margin: "auto"
          }}
        >
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button 
            style={{
              color: "white",
              backgroundColor: "#0BB9BC",
              margin: "15px",
              padding: "10px"
            }}
          >Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
