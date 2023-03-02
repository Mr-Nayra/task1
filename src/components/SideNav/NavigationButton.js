import React from "react";
import classes from "./NavigationButton.module.css";

const NavigationButton = (props) => {
  return (
    <div
      className={`flexrow ${
        props.tab == props.val
          ? classes.NavigationButtonSelect
          : classes.NavigationButton
      } center`}
      onClick={() => {
        props.onClick(props.val);
      }}
    >
      <h2>O</h2>
      <p className={classes.parah}>
        {props.openSideNav == 1 && props.children}
      </p>
    </div>
  );
};

export default NavigationButton;
