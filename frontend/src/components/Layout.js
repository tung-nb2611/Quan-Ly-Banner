import React from "react";
// import NavBar from "../NavBar";
import Sidebar from "./Sidebar";


const Layout = React.memo((props) => {
  return (
    <>
      {/* <NavBar 
        userID={props.userID} 
        socket={props.socket} 
        logOutHandler={props.logOutHandler} 
      /> */}
      <Sidebar />
      {props.children}
    </>
  );
});

export default Layout;
