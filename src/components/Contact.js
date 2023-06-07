import React from "react";
import footerBgPc from "../img/footer-banner-bg.jpg";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="row txt-container align-items-center h-100">
        <div className="col-6">
          <h1>Lorem ipsum dolor sit amet consectetur </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien.
          </p>
        </div>
      </div>
      <img src={footerBgPc} className="img-fluid" />
    </div>
  );
}

export default Contact;
