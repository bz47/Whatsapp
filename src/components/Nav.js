import React, { useState } from "react";
import Hidden from "./Hidden";
import styles from "../Styles/Nav.module.css";

function Nav() {
  const [invisible, setInvisible] = useState(false);

  const toggle = () =>
    invisible
      ? setInvisible(() => "")
      : setInvisible(() => (
          <div className={styles.Hidden}>
            <div className={styles.Box}>
              <h3>Message Privately</h3>
              <p>End-to-end encryption and privacy controls</p>
              <a>
                <p>→</p>
              </a>
            </div>
            <div className={styles.Box}>
              <h3>Stay Connected</h3>
              <p>End-to-end encryption and privacy controls</p>
              <a>
                <p>→</p>
              </a>
            </div>
            <div className={styles.Box}>
              <h3>Build Community</h3>
              <p>End-to-end encryption and privacy controls</p>
              <a>
                <p>→</p>
              </a>
            </div>
            <div className={styles.Box}>
              <h3>Express Yourself</h3>
              <p>End-to-end encryption and privacy controls</p>
              <a>
                <p>→</p>
              </a>
            </div>
            <div className={styles.Box}>
              <h3>WhatsApp Business</h3>
              <p>End-to-end encryption and privacy controls</p>
              <a>
                <p>→</p>
              </a>
            </div>
          </div>
        ));

  return (
    <>
      <section className={styles.Nav}>
        <section className={styles.Shift}>
          <a href=".Nav">
            <div id="log"></div>
          </a>
        </section>
        <ul id="ul">
          <button className={styles.Drop}>
            <a href="#pt4">Privacy</a>
          </button>
          <button className={styles.Drop} id="t">
            <a onClick={toggle}>
              Features <span id="v">⌄</span>
            </a>
          </button>
          <button className={styles.Drop}>
            <a href="#footer">For Business</a>
          </button>
        </ul>
        <section className={styles.ShiftR}>
          <p id="web">WhatsApp Web</p>
          <button className={styles.download}>Download </button>
        </section>
      </section>

      <Hidden state={invisible} />
    </>
  );
}

export default Nav;
