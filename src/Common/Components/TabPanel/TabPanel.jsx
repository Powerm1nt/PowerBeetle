import React from "react";
import PropTypes from "prop-types";

export default function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`cmpns-tabpanel-${index}`}
      {...other}
    >
      {value === index && <div className="tabpanel-root">{children}</div>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function switchIndex(index) {
  return { id: `cmpns-tabpanel-${index}` };
}
