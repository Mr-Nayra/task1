import React from "react";
import CertificateCard from "./CertificateCard";
import classes from "./CertificateSection.module.css";

const CertificateSection = () => {
  return (
    <div>
      <div className={`flexrow spacebetween ${classes.headingCont}`}>
        <h3 className={classes.heading}>Certificates under the category</h3>
        <div className={`flexrow`}>
          <input placeholder="Search Certificate" className={classes.input} />
          <button className={classes.button}>O</button>
        </div>
      </div>
      <div className={classes.certificateContainer}>
        <CertificateCard
          subheading="Finance"
          heading="Accounts"
          number={7}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Taxation"
          number={4}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Finance"
          number={5}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Accounts"
          number={7}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Financial Market Analysit"
          number={0}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Accounts"
          number={7}
        ></CertificateCard>
        <CertificateCard
          subheading="Finance"
          heading="Accounts"
          number={7}
        ></CertificateCard>
      </div>
    </div>
  );
};

export default CertificateSection;
