import React from "react";
import s from "./Badge.module.css";

const Badge = ({ badge = "new" }) => {
  return <span className={s.badge}>{badge}</span>;
};

export default Badge;
