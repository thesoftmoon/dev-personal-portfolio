import React from "react";
import headerPcVideo from "../vid/header-footer-vid-pc.mp4";
import headerMoVideo from "../vid/header-footer-vid-mo.mp4";

function Contact() {
  const gitHub = "https://github.com/thesoftmoon";
  const linkdIn = "https://www.linkedin.com/in/tomas-pacheco-uiux/";
  const eMail = "mailto:tomas.pacheco.c@gmail.com";
  return (
    <div id="contact" className="contact row" data-aos='fade-right'>
      <div className="col-12 txt-container h-100">
        <div className="col-12 col-md-6">
          <h1>would you like to work together?</h1>
          <p>
            Do you like my portfolio? Feel free to contact me by any of the social platforms, leave me a message and
            let's chat of your next project 😊.
          </p>
        </div>

        <div className="col-12 col-md-2 contact-icon-container">
          <div className="icon-container">
            <a href={gitHub} rel="noreferrer" target="_blank" className="icons">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 0C8.95536 0 0 9.17857 0 20.5089C0 29.5714 5.73214 37.25 13.6786 39.9643C14.6786 40.1518 15.0446 39.5179 15.0446 38.9732C15.0446 38.4821 15.0268 37.1964 15.0179 35.4821C9.45536 36.7232 8.27679 32.7321 8.27679 32.7321C7.36607 30.3661 6.05357 29.7321 6.05357 29.7321C4.24107 28.4554 6.1875 28.4821 6.1875 28.4821C8.19643 28.625 9.25 30.5982 9.25 30.5982C11.0357 33.7321 13.9286 32.8304 15.0714 32.3036C15.25 30.9821 15.7679 30.0714 16.3393 29.5625C11.9018 29.0446 7.23214 27.2857 7.23214 19.4286C7.23214 17.1875 8.00893 15.3571 9.28571 13.9286C9.08036 13.4107 8.39286 11.3214 9.48214 8.5C9.48214 8.5 11.1607 7.94643 14.9821 10.5982C16.5804 10.1429 18.2857 9.91964 19.9911 9.91071C21.6875 9.91964 23.4018 10.1429 25 10.5982C28.8214 7.94643 30.4911 8.5 30.4911 8.5C31.5804 11.3214 30.8929 13.4107 30.6875 13.9286C31.9643 15.3661 32.7411 17.1964 32.7411 19.4286C32.7411 27.3036 28.0625 29.0357 23.6071 29.5446C24.3214 30.1786 24.9643 31.4286 24.9643 33.3393C24.9643 36.0804 24.9375 38.2946 24.9375 38.9643C24.9375 39.5089 25.2946 40.1518 26.3125 39.9464C34.2768 37.2411 40 29.5625 40 20.5089C40 9.17857 31.0446 0 20 0Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="icon-container">
            <a
              href={linkdIn}
              rel="noreferrer"
              target="_blank"
              className="icons"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11_8)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 0C31.0383 0 40 8.96172 40 20C40 31.0383 31.0383 40 20 40C8.96172 40 0 31.0383 0 20C0 8.96172 8.96172 0 20 0ZM13.7471 31.2399V15.6211H8.55461V31.2399H13.7471ZM32.4674 31.2399V22.2832C32.4674 17.4856 29.9059 15.2538 26.4902 15.2538C23.7359 15.2538 22.5021 16.7686 21.8113 17.8325V15.6211H16.6202C16.689 17.0865 16.6202 31.2399 16.6202 31.2399H21.8112V22.5173C21.8112 22.0504 21.8448 21.5837 21.9824 21.25C22.357 20.3176 23.2119 19.3516 24.6461 19.3516C26.5238 19.3516 27.276 20.7845 27.276 22.8832V31.2399H32.4674ZM11.1859 8.08984C9.40937 8.08984 8.24867 9.25781 8.24867 10.7887C8.24867 12.2873 9.37406 13.4874 11.1172 13.4874H11.1507C12.9613 13.4874 14.0882 12.2873 14.0882 10.7887C14.0546 9.25781 12.9613 8.08984 11.1859 8.08984Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_8">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
          <div className="icon-container">
            <a href={eMail} rel="noreferrer" target="_blank" className="icons">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_11_5)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M27.8445 15.0944C27.6778 15.0944 21.6834 18.9778 21.0056 19.4111C20.6778 19.6333 20.3556 19.8166 20.0389 20.0278L19.0334 19.4C18.6445 19.1611 12.2222 15.0889 12.0611 15.0889C11.8 15.0889 11.6334 15.2444 11.6334 15.5166C11.6334 15.7722 11.8556 15.8722 12.0334 15.9778C13.2223 16.6778 19.7556 20.8778 19.9723 20.9111C20.1611 20.9389 20.4167 20.75 20.55 20.6611C22.8056 19.2222 25.0834 17.7055 27.3611 16.3166C27.7223 16.0944 28.2778 15.8055 28.2778 15.5166C28.2778 15.2444 28.1111 15.0889 27.85 15.0889L27.8445 15.0944Z"
                    fill="currentColor"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20 0C8.95556 0 0 8.95556 0 20C0 31.0444 8.95556 40 20 40C31.0444 40 40 31.0444 40 20C40 8.95556 31.0444 0 20 0ZM29.8167 25.8611C29.8167 26.4722 29.3667 26.9778 28.7444 26.9778H11.0722C10.45 26.9778 10 26.4778 10 25.8611V14.5333C10 13.8722 10.3778 13.3333 11.0722 13.3333H28.7444C29.4111 13.3333 29.8167 13.8611 29.8167 14.5333V25.8611Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_11_5">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <video autoPlay muted playsInline loop className="d-none d-md-block">
        <source src={headerPcVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay muted playsInline loop className="d-block d-md-none">
        <source src={headerMoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Contact;
