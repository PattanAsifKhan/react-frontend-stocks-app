import React from "react";
import * as Mui from "@material-ui/core";
import "./Header.scss";

const header = () => {
  return (
    <>
      <Mui.AppBar
        position="sticky"
        style={{ background: "#345" }}
        className="headerStyle"
      >
        <Mui.Toolbar variant="dense">
          <Mui.Typography variant="h6" color="inherit">
            Stocky
          </Mui.Typography>
          <Mui.Typography variant="h6" color="inherit" className="last-align">
            About
          </Mui.Typography>
        </Mui.Toolbar>
      </Mui.AppBar>
    </>
  );
};

export default header;
