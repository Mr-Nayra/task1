import React from "react";
import GreyTextBox from "./GreyTextBox";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <div>
      <div className="flexrow spacebetween">
        <div className="flexrow">
          <p className={classes.adminParah}>Assert admin&nbsp;&gt;&nbsp;</p>
          <p className={classes.manageCategories}>Manage Categories</p>
        </div>
        <button className={classes.purpleButton}>+ Add Category</button>
      </div>
      <div className={classes.CategoriesContainer}>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
        <GreyTextBox>Finance</GreyTextBox>
        <GreyTextBox>Electronics</GreyTextBox>
      </div>
    </div>
  );
};

export default Categories;
