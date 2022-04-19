import * as React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import IconTextField from "../IconTextField/IconTextField";

export default function SearchTextField(props) {
  return (
    <IconTextField
      id={props.id}
      icon={<SearchRoundedIcon />}
      placeholder={props.placeholder ? props.placeholder : "Search..."}
      className={`search-fld ${props.className}`}
    />
  );
}
