import React from "react";
import classes from "./SignChoice.module.css";
import CustomButton from "../UI/CustomButton";
import {useRouter} from "next/router";
const SignChoice = () => {
  const router = useRouter();
  const toLoginHandler = () => {
    router.push("sign-in");
  };
  const toRegisterHandler = () => {
    router.push("register");
  };
  return (
    <div className={classes.main}>
      <div className={classes.card}>
        <div className={classes.login}>
          <h2>New to React Progress?</h2>
          <p>Register now!</p>

          <CustomButton
            disabled
            onClick={toRegisterHandler}
            children={"sign up"}
          />
        </div>
        <div className={classes.register}>
          <h2>Have you been here already?</h2>
          <p>Continue now!</p>
          <CustomButton onClick={toLoginHandler} children={"continue"} />
        </div>
      </div>
    </div>
  );
};

export default SignChoice;
