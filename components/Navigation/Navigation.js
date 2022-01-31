import React from "react";
import classes from "./Navigation.module.css";
import NavLogo from "./NavLogo/NavLogo";
import NavItem from "./NavItem/NavItem";
import NavItems from "./NavItems/NavItems";
import NavUser from "./NavUser/NavUser";
import {Fragment} from "react";
import {useSelector} from "react-redux";
const Navigation = () => {
  const isMobile = useSelector((state) => state.ui.isMobile);
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);
  const items = (
    <div className={classes.navItems}>
      <NavItems>
        <NavItem children="Dashboard" to={"dashboard"} />
        <NavItem children="New Record" to={"new-record"} />
        <NavItem children="Records" to="records" />

        <NavItem children="Sign Out" to="home" />
        {/* <NavItem children="Records" to={"records"} /> */}
      </NavItems>
    </div>
  );
  return (
    <Fragment>
      <div className={classes.container}>
        <div
          style={!isLoggedIn ? {justifyContent: "center"} : null}
          className={classes.main}
        >
          {isLoggedIn && isMobile && items}
          <NavLogo />
          {isLoggedIn && !isMobile && items}
          {isLoggedIn && <NavUser />}
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
