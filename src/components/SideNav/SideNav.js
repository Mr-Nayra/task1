import React from "react";
import NavigationButton from "./NavigationButton";
import classes from "./SideNav.module.css";

const SideNav = (props) => {
  return (
    <div
      className={`flexcol ${classes.SideNav} ${
        props.openSideNav ? classes.SideNavOpen : classes.SideNavClose
      }`}
    >
      <button
        className={`flexrow ${classes.topbutton}`}
        onClick={() => {
          props.setOpenSideNav((prev) => {
            return !prev;
          });
        }}
      >
        <h2 className={classes.blueheading}>O</h2>
        {props.openSideNav == 1 && (
          <h2 className={classes.adminheading}>Admin Panel</h2>
        )}
      </button>
      <div>
        <NavigationButton openSideNav={props.openSideNav}>
          Manage Categories
        </NavigationButton>
        <NavigationButton openSideNav={props.openSideNav}>
          Manage Categories
        </NavigationButton>
        <NavigationButton openSideNav={props.openSideNav}>
          Manage Categories
        </NavigationButton>
        <NavigationButton openSideNav={props.openSideNav}>
          Manage Categories
        </NavigationButton>
      </div>
      <div className={`flexrow ${classes.profilediv}`}>
        <h2>O</h2>
        {props.openSideNav == 1 && (
          <div className={classes.profileText}>
            <h3>Anil J</h3>
            <p>Assert_admin</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNav;
