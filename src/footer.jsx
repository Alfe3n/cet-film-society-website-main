import React from "react";
import footerflow from "../static/images/footer-flow.svg";
import logo from "../static/images/FClogoWhite2.svg";
import facebook from "../static/images/socials/facebook.svg";
import instagram from "../static/images/socials/instagram.svg";
import mail from "../static/images/socials/mail.svg";
import telegram from "../static/images/socials/telegram.svg";

function footer() {
  return (
    <div className="footer container bg-white w-screen font-outfit m-0 p-0">
      <img
        src={footerflow}
        alt="wave"
        className="object-cover w-screen m-0 p-0"
      ></img>
      <div className="bg-brown100 justify-center flex m-0 p-0">
        <div className="footerlower flex items-center  w-8/12 justify-between border-b-2 border-white m-0 p-0">
          <img src={logo} alt="logo"></img>
          <div className="lower-right flex flex-col gap-y-6">
            <div className="flex gap-x-4 self-end">
              <img src={instagram}></img>
              <img src={facebook}></img>
              <img src={telegram}></img>
              <img src={mail}></img>
            </div>
            <div className="flex font-normal  text-white gap-x-8 items-center">
              <p>About</p>
              <p>Contact</p>
              <p className="rounded-full border-2 border-white border-solid py-1 px-4 ">
                Get Brochure
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="font-normal text-white text-center bg-brown100 p-8">
        © 2022 College of Engineering Trivandrum. All Rights Reserved.
      </p>
    </div>
  );
}

export default footer;
