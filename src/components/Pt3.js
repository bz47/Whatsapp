import React from "react";
import styles from "../Styles/Pt3.module.css";

function Pt3() {
  return (
    <div id="pt3">
      <div className={styles.img}>
        <div id="me" aria-label="lock and key" title="key and lock"></div>
      </div>
      <div className={styles.safe}>
        <span id="speak">
          Speak
          <br></br>
          <span id="freely">freely</span>
        </span>
        <br></br>
        With end-to-end encryption, your personal messages and calls are
        secured. Only you and the person you're talking to can read or listen to
        them, and nobody in between, not even WhatsApp.
        <p className={styles.Learn}>Learn More ></p>
      </div>
    </div>
  );
}

export default Pt3;
