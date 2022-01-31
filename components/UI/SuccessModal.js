import React from "react";
import Card from "./Card";
import classes from "./SuccessModal.module.css";
import SuccessIcon from "./SuccessIcon";
import CustomButton from "./CustomButton";
import {useRouter} from "next/router";
import {uiActions} from "../../redux/ui-slice";
import {useDispatch} from "react-redux";
const SuccessModal = (props) => {
  console.log(props);
  const dispatch = useDispatch();
  const router = useRouter();
  const moveToHandler = () => {
    if (props.to) {
      router.push(props.to);
      dispatch(uiActions.toggleSuccessModal());
    } else {
      router.push("dashboard");
      dispatch(uiActions.toggleSuccessModal());
    }
  };
  return (
    <Card className={classes.card}>
      <h1>Success!</h1>
      <SuccessIcon />
      <CustomButton onClick={moveToHandler} styles={{marginTop: "15px"}}>
        DONE
      </CustomButton>
    </Card>
  );
};

export default React.memo(SuccessModal);
