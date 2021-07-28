import React from "react";
import Link from "next/link";
import {
  FaFacebookMessenger,
  FaFacebook,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const SidebarSocial = () => {
  return (
    <div>
      <div className="side-bar-social">
        <ul>
          <li>
            <div className="icon-list messnger">
              <a href="https://www.facebook.com/digipremier1/">
                <FaFacebookMessenger className="icons" />
              </a>
            </div>
          </li>
          <li>
            <div className="icon-list facebook">
              <a href="https://www.facebook.com/digipremier1/">
                <FaFacebook className="icons" />
              </a>
            </div>
          </li>
          <li>
            <div className="icon-list twitter">
              <a href="https://twitter.com/digipremier">
                <AiFillTwitterCircle className="icons" />
              </a>
            </div>
          </li>
          <li>
            <div className="icon-list whatsapp">
              <a href="">
                <FaWhatsapp className="icons" />
              </a>
            </div>
          </li>
          <li>
            <div className="icon-list linked">
              <a href="https://www.linkedin.com/in/digi-primier-8bb11720a/">
                <FaLinkedinIn className="icons" />
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarSocial;
