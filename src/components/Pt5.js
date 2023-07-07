import React from "react";
import styles from "../Styles/Pt5.module.css";

function Pt5() {
  return (
    <div id="pt5">
      <div className={styles.Dubsack}>
        <div className={styles.text}>
          <span id="keep">Keep in touch with your groups</span>
          Whether it's planning an outing with friends or simply staying on top
          of your family chats, group conversations should feel effortless.
          <p className={styles.Learn}>
            <a href=".Nav">Learn More ></a>
          </p>
        </div>
        <div className={styles.picz} id="P1"></div>
      </div>

      <div id="flip" className={styles.Dubsack}>
        <div className={styles.picz} id="P2"></div>
        <div className={styles.text}>
          <span> Say what you feel</span>
          Express yourself without words. Use stickers and GIFs or share
          everyday moments on Status. Record a voice message for a quick hello
          or a longer story.
          <p className={styles.Learn}>
            <a href=".Nav">Learn More ></a>
          </p>
        </div>
      </div>

      <div className={styles.Dubsack}>
        <div className={styles.text}>
          <span>Transform your business</span>
          WhatsApp Business helps you reach your customers globally to deliver
          compelling experiences at scale. Showcase your products and services,
          increase sales, and build relationships all with WhatsApp.
          <p className={styles.Learn}>
            <a href=".Nav">Learn More ></a>
          </p>
        </div>
        <div className={styles.picz} id="P3"></div>
      </div>
    </div>
  );
}

export default Pt5;
