import React from "react";
import Categories from "./CategoriesSection/Categories";
import CertificateSection from "./CertificateSection/CertificateSection";
import classes from "./MainPage.module.css"

const MainPage = () => {
  return (
    <div className={classes.mainPage}>
      <Categories />
      <CertificateSection />
    </div>
  );
};

export default MainPage;
