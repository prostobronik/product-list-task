import React, { useState } from "react";
import s from "./Button.module.css";

const Button = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,
  prevPage,
  nextPage,
  pageNumbers,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => {
    setHover(!hover);
  };
  const commonStyles = {
    backgroundColor: btnColor,
    color: labelColor || "white",
  };
  const outlineStyles = {
    border: `1px solid ${btnColor}`,
    color: btnColor,
    backgroundColor: "white",
  };
  const outlineHoverStyle = {
    color: labelColor || "white",
    backgroundColor: btnColor,
  };

  const roundedStyle = {
    backgroundColor: btnColor,
    color: labelColor || "white",
    borderRadius: "25px",
  };
  const disabledStyle = {
    cursor: "default",
    backgroundColor: btnColor,
    color: labelColor || "white",
    opacity: 0.4,
  };
  const blockStyles = {
    width: "95%",
    margin: "0 auto",
  };
  let btnStyle;
  switch (type) {
    case "rounded":
      btnStyle = roundedStyle;
      break;
    case "block":
      btnStyle = blockStyles;
      break;
    case "outline":
      if (hover) {
        btnStyle = outlineHoverStyle;
      } else {
        btnStyle = outlineStyles;
      }
      break;
    default:
      btnStyle = {
        backgroundColor: btnColor,
        color: labelColor || "white",
      };
      break;
  }

  const Tag = props.href ? "a" : "button";

  const handlePagination = () => {
    switch (children) {
      case "Вперед":
        return nextPage(pageNumbers);
      case "Назад":
        return prevPage();
      default:
        return null;
    }
  };

  return (
    <Tag
      style={
        disabled
          ? { ...commonStyles, ...btnStyle, ...disabledStyle, ...style }
          : { ...commonStyles, ...btnStyle, ...style }
      }
      onMouseEnter={toggleHover}
      onMouseLeave={toggleHover}
      {...props}
      type="button"
      onClick={!disabled ? handlePagination : () => {}}
      className={s.btn}
    >
      {children || "button"}
    </Tag>
  );
};

export default Button;
