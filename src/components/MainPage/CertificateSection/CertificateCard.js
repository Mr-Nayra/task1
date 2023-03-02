import React from "react";
import classes from "./CertificateCard.module.css";

const CertificateCard = (props) => {
  return (
    <div className={`${classes.card} flexcol spacebetween`}>
      <div>
        <div className={`flexrow spacebetween ${classes.subHeadingCont}`}>
          <h2 className={props.subheading}>{props.subheading}</h2>
          <p>Know more&nbsp;&gt;</p>
        </div>
        <div className="flexrow ">
          <h1 className={classes.blueHeading}>{props.heading}</h1>
          <h1 className={classes.blueHeading}>
            <span className={classes.green}>{props.number}</span>
          </h1>
        </div>
      </div>
      <div className="flexcol">
        <button className={classes.greenButton}>Tag a job</button>
        <button className={classes.purpleButton}>Employees Enrolled</button>
        <button className={classes.greyButton}>Assign Certificate</button>
      </div>
    </div>
  );
};

export default CertificateCard;
