import React from "react";
import CertificateCard from "./CertificateCard";
import classes from "./CertificateSection.module.css";

const CertificateSection = () => {
  return (
    <div className={classes.certificateContainer}>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
      <CertificateCard subheading="Finance" heading="Accounts"></CertificateCard>
    </div>
  );
};

export default CertificateSection;
