import React from "react";
import styles from "../Styles/CarouselItems.module.css";

export const CarouselItem = ({ item, width }) => {
  return (
    <div className={styles.carouselItem} style={{ width: width }}>
      <div id="limit">
        <div id="description">{item.description} </div>
        <div id="smallbox">{item.text} </div>
        <button id="more">Read More</button>
      </div>
    </div>
  );
};

export default CarouselItem;
