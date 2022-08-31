import { TextField } from "@mui/material";
import React from "react";
import { TextfieldWrapperProps } from "../../types/@types";
import './textfieldWrapper.css'

const TextfieldWrapper = (props: TextfieldWrapperProps) => {
    const {label, placeholder} = props;
  return (
    <div>
      <h5 className="label">{label}</h5>
      <TextField placeholder={placeholder} className="textfield" />
    </div>
  );
};

export default TextfieldWrapper;
