import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import classes from "./SideNav.module.css";

const SideNav = (props) => {
  const [tab, setTab] = useState(0);

  const changeTab = (val) => {
    console.log(val);
    setTab(val);
  };

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
        <NavigationButton
          openSideNav={props.openSideNav}
          onClick={changeTab}
          tab={tab}
          val={0}
        >
          Manage Categories
        </NavigationButton>
        <NavigationButton
          openSideNav={props.openSideNav}
          onClick={changeTab}
          tab={tab}
          val={1}
        >
          Add Company
        </NavigationButton>
        <NavigationButton
          openSideNav={props.openSideNav}
          onClick={changeTab}
          tab={tab}
          val={2}
        >
          Add New User
        </NavigationButton>
        <NavigationButton
          openSideNav={props.openSideNav}
          onClick={changeTab}
          tab={tab}
          val={3}
        >
          Add Students
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
