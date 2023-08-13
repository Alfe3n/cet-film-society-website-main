import React from "react";
import footerflow from "../static/images/footer-flow.svg";
import logo from "../static/images/FClogoWhite2.svg";
import facebook from "../static/images/socials/facebook.svg";
import instagram from "../static/images/socials/instagram.svg";
import mail from "../static/images/socials/mail.svg";
import telegram from "../static/images/socials/telegram.svg";
// import "./styles/waveMotion.css";
function footer() {
  return (
    <div className="container w-full p-0 m-0 footer font-outfit">
      {/* <div className="wave-container"> */}
      <img
        src={footerflow}
        alt="wave"
        className="w-screen p-0 m-0 translate-y-3"
      ></img>
      {/* </div> */}

      <div className="flex justify-center bg-brown100 ">
        <div className="flex items-center justify-between w-8/12 border-b-2 border-white footerlower">
          <img src={logo} alt="logo"></img>
          <div className="flex flex-col lower-right gap-y-6">
            <div className="flex self-end gap-x-4">
              <img src={instagram}></img>
              <img src={facebook}></img>
              <img src={telegram}></img>
              <img src={mail}></img>
            </div>
            <div className="flex items-center font-normal text-white gap-x-8">
              <p>About</p>
              <p>Contact</p>
              <p className="px-4 py-1 border-2 border-white border-solid rounded-full ">
                <span className="hidden">Get</span>Brochure
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="p-8 font-normal text-center text-white bg-brown100">
        © 2022 College of Engineering Trivandrum. All Rights Reserved.
      </p>
    </div>
  );
}

export default footer;
