import React from "react";
import HomePage from "../components/Home/HomePage";
import {uiActions} from "../redux/ui-slice";

import {useDispatch} from "react-redux";
import {useEffect} from "react";
import deviceType from "../helpers/device-type";
import {Fragment} from "react";
const index = () => {
  return (
    <Fragment>
      <HomePage />
    </Fragment>
  );
};

export default index;
