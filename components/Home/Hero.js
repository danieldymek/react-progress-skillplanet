import React from "react";
import classes from "./Hero.module.css";
import NavLogo from "../Navigation/NavLogo/NavLogo";
import CustomButton from "../UI/CustomButton";
import img from "../../assets/NavLogo/brand_react_icon_158742.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {useRouter} from "next/router";
const Hero = (props) => {
  const router = useRouter();
  const moveToSignInHandler = () => {
    router.push("start");
  };
  const moveToHome = () => {
    router.push("/");
  };
  return (
    <div className={classes.container}>
      {props.is404 && (
        <div className={classes.main}>
          <img className={classes.img} src={img.src}></img>
          <h1>Looks like you got stranded</h1>
          <h3>Go back to the home page</h3>
          <CustomButton
            prefixIcon={<FavoriteIcon />}
            size="l"
            children={"Go back!"}
            onClick={moveToHome}
          />
        </div>
      )}
      {!props.is404 && (
        <div className={classes.main}>
          <img className={classes.img} src={img.src}></img>
          <h1>Welcome to React Progress</h1>
          <h3>Take your seat and try it out!</h3>
          <CustomButton
            prefixIcon={<FavoriteIcon />}
            size="l"
            children={"Try now"}
            onClick={moveToSignInHandler}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
