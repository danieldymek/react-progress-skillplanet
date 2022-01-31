import React from "react";
import Button from "@mui/material/Button";
import {ThemeProvider} from "@mui/material";
import {createTheme} from "@mui/material";

const CustomButton = (props) => {
  const prefixIcon = props.prefixIcon ? props.prefixIcon : false;
  const disabled = props.disabled ? props.disabled : false;
  const color = props.color ? props.color : "#000000";
  const textColor = props.textColor ? props.textColor : "#ffffff";
  const variant = props.variant ? props.variant : "contained";
  const clickRipple = props.clickRipple ? props.clickRipple : false;
  let size = "";
  const text = props.text ? props.text : "BUTTON";
  const isTextPresent = text.trim() > 0;
  switch (props.size) {
    case "s":
      size = "small";
      break;
    case "m":
      size = "medium";
      break;
    case "l":
      size = "large";
      break;

    default:
      size = "medium";
      break;
  }
  const theme = createTheme({
    palette: {
      secondary: {
        main: color,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        sx={{color: textColor, ...props.styles}}
        color="secondary"
        variant={variant}
        disableRipple={!clickRipple}
        size={size}
        disabled={disabled}
        startIcon={prefixIcon}
        onClick={props.onClick}
        type={props.type}
      >
        {isTextPresent ? text : props.children}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
