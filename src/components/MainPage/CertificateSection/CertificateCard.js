import React from "react";
import classes from "./CertificateCard.module.css"

const CertificateCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={`flexrow spacebetween ${classes.subHeadingCont}`}>
        <h2>{props.subheading}</h2>
        <p>Know more&nbsp;&gt;</p>
      </div>
      <h1 className={classes.blueHeading}>{props.heading}</h1>
      <button className={classes.greenButton}>Tag a job</button>
      <button className={classes.purpleButton}>Employees Enrolled</button>
      <button className={classes.greyButton}>Assign Certificate</button>
    </div>
  );
};

export default CertificateCard;
