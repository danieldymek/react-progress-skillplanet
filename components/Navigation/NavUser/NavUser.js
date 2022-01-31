import React from "react";
import {AvatarGenerator} from "random-avatar-generator";
import classes from "./NavUser.module.css";
import img from "../../../assets/contact-me/cropped-skillplanet.io-favicon-32x32.png";
import {useSelector} from "react-redux";
import {Fragment} from "react";
import CustomButton from "../../UI/CustomButton";
const NavUser = () => {
  const isLogged = useSelector((state) => state.ui.isLoggedIn);
  const isMobile = useSelector((state) => state.ui.isMobile);
  const generator = new AvatarGenerator();
  const avatar = generator
    .generateRandomAvatar()
    .replace("Circle", "Transparent");
  const style = {
    whiteSpace: "nowrap",
    whiteSpace: "pre",
  };
  return (
    <Fragment>
      <div className={classes.container}>
        {/* {isLogged && (
          <div className={classes.main}>
            <img className={classes.img} src={img.src} />
          </div>
        )} */}
      </div>
    </Fragment>
  );
};

export default NavUser;
