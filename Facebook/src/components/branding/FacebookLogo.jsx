import React from "react";
import facebookLogo from "../../assets/facebook-logo.png";

export default function FacebookLogo() {
  return (
    <div className=" flex flex-1 justify-center items-center ">
      <img src={facebookLogo} alt="Facebook Logo" className="h-16" />
    </div>
  );
}
