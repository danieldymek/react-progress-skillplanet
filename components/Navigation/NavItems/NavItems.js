import React from "react";
import classes from "./NavItems.module.css";
import {useState} from "react";
import {IconButton} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {Fragment} from "react";
import ClearIcon from "@mui/icons-material/Clear";
import {useSelector} from "react-redux";
const NavItems = (props) => {
  const isMobile = useSelector((state) => state.ui.isMobile);

  const [isOpen, setIsOpen] = useState(false);
  const item = props.children;

  const openIcon = <MenuIcon sx={{fontSize: "35px"}} />;
  const closeIcon = <ClearIcon sx={{fontSize: "35px"}} />;
  return (
    <Fragment>
      <div className={classes.container}>
        {isOpen && isMobile && (
          <div className={classes.mobileNav}>
            <div className={classes.mobileMain}>
              <div className={classes.mobileItems}>
                {item.map((callback) => {
                  return (
                    <div
                      onClick={() => {
                        setIsOpen(false);
                      }}
                      className={classes.mobileItem}
                    >
                      {callback}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {!isMobile && <div className={classes.main}>{item}</div>}
        {isMobile && (
          <div
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className={classes.mainMobile}
          >
            <IconButton children={isOpen ? closeIcon : openIcon} />
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default NavItems;
