import React from "react";
import classes from "./Input.module.css";
import {useCallback} from "react";
const Input = (props, ref) => {
  return (
    <div className={classes.container}>
      <p className={classes.label}>
        {props.placeholder}
        {/* {props.errorMessage.length > 0 && (
          <a className={classes.errorText}>{"  " + props.errorMessage}</a>
        )} */}
      </p>
      {
        <input
          defaultValue={props.value}
          required
          style={props.style}
          onKeyPress={props.onKeyPress}
          min={props.min}
          max={props.max}
          autoFocus={props.autoFocus}
          ref={ref}
          type={props.type}
          name={props.placeholder}
          placeholder={props.placeholder}
          className={`${classes.input} ${props.isError && classes.invalid}`}
        />
      }
    </div>
  );
};

export default React.forwardRef(Input);
