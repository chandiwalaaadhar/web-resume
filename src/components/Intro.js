import * as React from "react";
import {
  img_container,
  title,
  sub_container,
  coming_soon,
} from "./intro.module.scss";
import DevelopementImage from "../assets/dev_img.png";

const Intro = () => {
  return (
    <div>
      <div className={sub_container}>
        <h2 className={title}>Aadhar Chandiwala</h2>
      </div>

      <img
        className={img_container}
        src={DevelopementImage}
        alt="Website Under Developement"
      />
      <div className={sub_container}>
        <h2 className={coming_soon}>Coming Soon...</h2>
      </div>
    </div>
  );
};

export default Intro;
