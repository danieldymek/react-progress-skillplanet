import React from "react";
import classes from "./NavItem.module.css";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";
import {uiActions} from "../../../redux/ui-slice";
const NavItem = (props) => {
  const dispatch = useDispatch();

  const router = useRouter();
  const moveHandler = () => {
    if (props.children === "Sign Out") {
      dispatch(uiActions.toggleLoggedIn());
    }
    if (props.to) {
      router.push(props.to);
    }
  };

  return (
    <div className={classes.container}>
      <div onClick={moveHandler} className={classes.main}>
        {props.children}
      </div>
    </div>
  );
};

export default NavItem;
