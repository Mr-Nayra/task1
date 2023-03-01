import { useState } from "react";
import MainPage from "./components/MainPage/MainPage";
import SideNav from "./components/SideNav/SideNav";
import classes from "./App.module.css";

function App() {
  const [openSideNav, setOpenSideNav] = useState(0);

  return (
    <div className={classes.appContainer}>
      <SideNav setOpenSideNav={setOpenSideNav} openSideNav={openSideNav} />
      <MainPage />
    </div>
  );
}

export default App;
