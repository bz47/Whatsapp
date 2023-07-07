import React from "react";
import styles from "../Styles/Banner.module.css";

function Banner() {
  return (
    <div id="banner">
      <div className={styles.Holder}>
        <div id="banfam">
          <div id="join">
            <h3>HI Join Now!</h3>
            <p>
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </p>
            <button className={styles.download}>Download</button>
          </div>
          <div id="stickers">
            <div id="stick"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
