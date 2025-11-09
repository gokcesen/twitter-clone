import React from "react";

const LoadingScreen = () => {
  return (
    <div
      style={{
        position: "fixed",    
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,          
      }}
    >
      <img
        src="/images/x-logo.png"
        alt="Logo"
        style={{ width: "120px", height: "120px" }}
      />
    </div>
  );
};

export default LoadingScreen;

