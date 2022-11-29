import React, { useEffect, useState } from "react";
import Rellax from "rellax";
import "./Hero.css";
import { motion } from "framer-motion";

export const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    var rellax = new Rellax(".rellax", {
      center: true,
    });
    console.log("ran");
    console.log(offsetY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <motion.div
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 2, delay: 3 }}
        className="photo-frame photo"
      >
        <div
          style={{
            backgroundImage: `url('https://thumbs.dreamstime.com/b/poster-shoe-new-collection-shoes-advertisement-192307675.jpg')`,
          }}
          className="left-image image rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="2"
        >
          <h2
            data-rellax-percentage="0.5"
            data-rellax-speed="8"
            className="rellax"
          >
            SHOP THE COLLECTION
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url("https://images.hdqwalls.com/wallpapers/hanging-shoes-in-air-city-night-view-4k-v5.jpg")`,
          }}
          className="right-image image rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="10"
        >
          <h2
            data-rellax-percentage="0.5"
            data-rellax-speed="8"
            className="rellax"
          >
            SHOP THE COLLECTION
          </h2>
        </div>
      </motion.div>
      <motion.div className="photo-frame-2 photo">
        <div
          style={{
            backgroundImage: `url('https://wallpapercave.com/wp/wp3075825.jpg')`,
          }}
          className="left-image image rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="10"
        >
          <h2
            data-rellax-percentage="0.5"
            data-rellax-speed="5"
            className="rellax"
          >
            SHOP THE COLLECTION
          </h2>
        </div>
        <div
          style={{
            backgroundImage: `url('https://hips.hearstapps.com/bpc.h-cdn.co/assets/17/39/1600x800/landscape-1506621756-mens-jeans.jpg?resize=1200:*')`,
          }}
          className="right-image image rellax"
          data-rellax-percentage="0.5"
          data-rellax-speed="2"
        >
          <h2
            data-rellax-percentage="0.5"
            data-rellax-speed="-2"
            className="rellax"
          >
            SHOP THE COLLECTION
          </h2>
        </div>
      </motion.div>
    </div>
  );
};
