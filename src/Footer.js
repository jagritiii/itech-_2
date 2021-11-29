import React from "react";
import "./Footer.css";
import itech from "./componets/img/logo_light.png";
import ssipmt from "./componets/img/SSIPMT.png";
import facebook from "./componets/icon/facebook.png";
import twitter from "./componets/icon/twitter.png";
import instagram from "./componets/icon/instagram.png";

function Footer() {
  return (
    <div className="main-footer" id="footer_area">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <img
              src={itech}
              width="200"
              height="200"
              className="litech-logo"
              alt="ssipmt logo"
            />
          </div>

          {/* Column2 */}
          <div className="col">
            <img
              src={ssipmt}
              width="200"
              height="200"
              className="ssipmt_logo"
              alt="ssipmt logo"
            />
          </div>
          <div className="col">
            <div className="quote">
              WE MAKE <b>IT</b> HAPPEN
            </div>
          </div>
        </div>
        <div className="col">

          <a href="https://www.facebook.com/ssipmtrpr/" target="_blank" className="social">
            <img src={facebook} width="20" />
          </a>
          {/* <h6>Facebook</h6> */}


          <a href="https://www.instagram.com/itech_association/" target="_blank" className="social">
            <img src={instagram} width="20" />
          </a>
          {/* <h6>Instagram</h6> */}


          <a href="https://twitter.com/ssipmt" target="_blank" className="social">
            <img src={twitter} width="20" />
          </a>
          {/* <h6>Twitter</h6> */}

        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} SSIPMT | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
