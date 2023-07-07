import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";
import styles from "../Styles/Carousel.module.css";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      text: "For the moments when you make a mistake, or simply change ... ",
      description: "Now you can edit your WhatsApp messages",
    },
    {
      text: "Our passion is to find new ways to help keep your messages ... passion is to find new ways to help keep your messages . ",
      description: "Chat Lock: Protecting your most intimate conversations ",
    },
    {
      text: "As we continue to innovate the app, today we’re sharing several... ",
      description: "New updates to Polls and sharing with captions",
    },
    {
      text: "Today we’re excited to introduce Channels: a simple reliable, and... ",
      description: "Introducing WhatsApp Channels",
    },
  ];
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translate(-${activeIndex * 103}%)` }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className={styles.carouselButtons}>
        <button
          className={styles.buttonArrow}
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className={styles.indicators}>
          {items.map((item, index) => {
            return (
              <button
                className={styles.indicatorButtons}
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className={styles.buttonArrow}
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
