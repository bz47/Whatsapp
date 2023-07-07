import React, { useState } from "react";
import styles from "../Styles/Hidden.module.css";

function Hidden(props) {
  return <div className="hovGreen">{props.state}</div>;
}

export default Hidden;
