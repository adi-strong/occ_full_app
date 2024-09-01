import {MenuItem} from "@mui/material";
import React from "react";

const SettingMenuItem = React.forwardRef(
  (props, ref) => {
    
    return (
      <MenuItem ref={ref} {...props}></MenuItem>
    )
  })
