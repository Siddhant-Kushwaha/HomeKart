import React, { useEffect } from "react";
import Rellax from "rellax";

export const SinglePhoto = (props) => {
  useEffect(() => {
    var rellax = new Rellax(".rlx", {
      center: true,
    });
  });
  return (
    <div className="single-pic">
      <div
        className="single-frame rlx"
        data-rellax-percentage="0.5"
        data-rellax-speed="-2"
      >
        <img
          className="rlx"
          data-rellax-percentage="0.5"
          data-rellax-speed="2"
          src="https://media.istockphoto.com/photos/stylish-man-wearing-sunglasses-and-white-shirt-city-life-picture-id1201026026?k=20&m=1201026026&s=612x612&w=0&h=5GIO1F1S4vxIlrxcPQWFr7mWJ3IVqCxHFn8K52qm4QI="
          alt=""
        />
        <div className="overlay">
          <h2
            className="rlx"
            data-rellax-percentage="0.5"
            data-rellax-speed="-2"
          >
            Explore Magic
          </h2>
        </div>
      </div>
    </div>
  );
};
