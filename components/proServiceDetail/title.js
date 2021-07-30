import React from "react";
import Image from "next/image";

const Title = ({ heading }) => {
  return (
    <div>
      <div className="hero-title">
        <div className="overlay">
          <h2>{heading}</h2>
        </div>
      </div>
    </div>
  );
};

export default Title;
