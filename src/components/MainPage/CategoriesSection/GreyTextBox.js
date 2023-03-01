import React from "react";
import classes from "./GreyTextBox.module.css"

const GreyTextBox = (props) => {
  return (
    <div className={classes.greyBox}>
      <p className={classes.parah}>{props.children}</p>
    </div>
  );
};

export default GreyTextBox;
