import * as React from "react";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./IconTextField.scss";

const style_defCenterRule = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
};

let adornment = (id, icon) => {
  return {
    startAdornment: (
      <InputAdornment position="start">
        <div
          style={style_defCenterRule}
          onClick={(e) => {
            e.preventDefault();
            document.getElementById(id).focus();
          }}
        >
          {icon}
        </div>
      </InputAdornment>
    ),
  };
};

export default function IconTextField(props) {
  return (
    <TextField
      id={props.id}
      placeholder={props.placeholder ? props.placeholder : "IconTextField"}
      className={`iconfield-fld ${props.className}`}
      InputProps={props.icon ? adornment(props.id, props.icon) : undefined}
      variant="filled"
    />
  );
}
