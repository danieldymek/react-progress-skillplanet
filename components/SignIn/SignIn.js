import React from "react";
import {Fragment} from "react";
import classes from "./SignIn.module.css";
import NavLogo from "../Navigation/NavLogo/NavLogo";
import CustomButton from "../UI/CustomButton";
import {useState} from "react";
import {useRef} from "react";
import Input from "../UI/Input";
import Spinner from "../UI/Spinner";
import {useRouter} from "next/router";
import SignInFailed from "./SignInFailed";
import {useDispatch} from "react-redux";
import {uiActions} from "../../redux/ui-slice";
import {useSelector} from "react-redux";
const key = {email: "admin@skillplanet.pl", password: "skillplanet"};
const SignIn = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isLoginDone, setIsLoginDone] = useState(false);
  const [isPasswordDone, setIsPasswordDone] = useState(false);
  const [email, setEmail] = useState("");
  const [isFailed, setIsFailed] = useState(false);
  const [emailFailed, setEmailFailed] = useState(false);
  const isLoggedIn = useSelector((state) => state.ui.isLoggedIn);

  const emailRef = useRef();
  const passwordRef = useRef();
  const hr = (
    <div
      style={{width: "100%", height: "1px", backgroundColor: "lightgray"}}
    ></div>
  );
  const emailHandler = () => {
    const e = emailRef.current.value;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(e)) {
      setIsLoginDone(true);
      setIsFailed(false);
      setEmail(e);
      setEmailFailed(false);
    } else {
      setEmailFailed(true);
    }
  };
  const submitHandler = () => {
    const pass = passwordRef.current.value;
    setIsPasswordDone((prevState) => !prevState);
    setTimeout(() => {
      if (pass === key.password && email === key.email) {
        router.push("/dashboard");
        dispatch(uiActions.toggleLoggedIn());
        setIsPasswordDone(true);
      } else {
        setIsFailed(true);
        setIsLoginDone(false);
      }
      setIsPasswordDone(false);
    }, 1000);
  };
  const wrongEmailHandler = () => {
    setEmailFailed(false);
  };
  const wrongCredentialsHandler = () => {
    setIsFailed(false);
    setEmailFailed(false);
  };

  return (
    <Fragment>
      {!isLoggedIn && (
        <div className={classes.container}>
          <div className={classes.main}>
            <div className={classes.loginForm}>
              <div className={classes.form}>
                {isFailed && (
                  <SignInFailed
                    message={"Wrong Credentials!"}
                    onClick={wrongCredentialsHandler}
                  />
                )}
                {emailFailed && (
                  <SignInFailed
                    message={"Invalid Email"}
                    onClick={wrongEmailHandler}
                  />
                )}
                {!isFailed && !emailFailed && !isLoginDone && (
                  <Fragment>
                    <div className={classes.email}>
                      <Input
                        autoFocus
                        isError={emailFailed}
                        ref={emailRef}
                        type="email"
                        placeholder={"E-mail"}
                        onKeyPress={(event) => {
                          if (event.key === "Enter") return emailHandler();
                        }}
                      />
                    </div>
                    <CustomButton
                      children={emailFailed ? "try again" : "Continue"}
                      styles={{marginTop: "10px"}}
                      onClick={emailHandler}
                    />
                  </Fragment>
                )}
                {!isPasswordDone && isLoginDone && (
                  <Fragment>
                    <div className={classes.email}>
                      <Input
                        ref={passwordRef}
                        type="password"
                        placeholder={"Password"}
                        autoFocus
                        onKeyPress={(event) => {
                          if (event.key === "Enter") return submitHandler();
                        }}
                      />
                    </div>
                    <CustomButton
                      children={"Verify with password"}
                      styles={{marginTop: "10px"}}
                      type="submit"
                      onClick={submitHandler}
                    />
                  </Fragment>
                )}
                {isPasswordDone && <p>Logging you in...</p>}
                {isPasswordDone && <Spinner />}
              </div>
              <br />

              <NavLogo style={{marginTop: "10px"}} />
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default SignIn;
