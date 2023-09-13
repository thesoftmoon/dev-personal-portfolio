import React, { useState } from "react";
import projectData from "../projectInfo.json";

function Portfolio() {
  const mainTitle = "Projects";
  const [isHovering, setIsHovering] = useState(null);

  const handleMouseOver = (index) => {
    setIsHovering(index);
    console.log('is hovering');
  };

  const handleMouseOut = () => {
    setIsHovering(null);
  };
  return (
    <div id="projects" className="projects" data-aos='fade-left'>
      <div className="row">
        <div className="col-12 text-center title">
          <h1>{mainTitle}</h1>
        </div>
      </div>
      <div className="row d-flex justify-content-between">
        {projectData.map((card, index) => (
          <div
            key={index}
            className="col-12 col-md-4 project-card"
            onMouseOver={() => handleMouseOver(index)}
            onMouseOut={handleMouseOut}
          >
            <img src={require(`../${card.image}`)} alt="project thumbnail" />
              <div className={ isHovering === index ? 'card-text fade-in' : 'card-text'}>
                <h4>{card.title}</h4>
                <p className="info-text">{card.info}</p>
                <div className="tags-and-links">
                  <div className="links">
                    {card.dribbble && (
                      <a
                        href={card.dribbble}
                        target="_blank"
                        rel="noreferrer"
                        className="icons pb-2"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 40 40"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 0C31.0383 0 40 8.96172 40 20C40 31.0383 31.0383 40 20 40C8.96172 40 0 31.0383 0 20C0 8.96172 8.96172 0 20 0ZM20 7.10938C12.8836 7.10938 7.10938 12.8836 7.10938 20C7.10938 27.1164 12.8836 32.8906 20 32.8906C27.1025 32.8906 32.8906 27.1164 32.8906 20C32.8906 12.8836 27.1025 7.10938 20 7.10938ZM20 31.0171C17.4554 31.0171 15.1067 30.1503 13.2471 28.6963C13.4428 28.2907 15.6798 23.9848 21.8874 21.8176C21.9153 21.8037 21.9295 21.8037 21.9573 21.7895C23.5094 25.8021 24.1384 29.1717 24.3062 30.1364C22.978 30.7095 21.5239 31.0171 20 31.0171ZM26.1377 29.1297C26.0259 28.4586 25.4388 25.2429 23.9987 21.2862C27.4521 20.7409 30.4718 21.6358 30.8493 21.7616C30.3741 24.8234 28.6125 27.466 26.1377 29.1297ZM8.98289 20.0139V19.6785C9.45828 19.6924 14.7991 19.7623 20.2937 18.1126C20.6152 18.7277 20.9088 19.3568 21.1883 19.9861C21.0485 20.0281 20.8948 20.0698 20.7548 20.1119C15.0786 21.9434 12.0586 26.9486 11.807 27.368C10.0595 25.4246 8.98289 22.8383 8.98289 20.0139ZM28.5145 13.0514C30.0523 14.925 30.9753 17.3156 31.0032 19.902C30.6397 19.8322 27.0045 19.0912 23.3415 19.5527C23.2577 19.3709 23.1876 19.175 23.1038 18.9793C22.88 18.4482 22.6284 17.903 22.3768 17.3855C26.4314 15.7358 28.2768 13.359 28.5145 13.0514ZM15.3163 10.0453C15.61 10.437 17.5673 13.1634 19.3988 16.4069C14.2539 17.7769 9.70992 17.7491 9.22063 17.7491C9.93344 14.3377 12.2404 11.4994 15.3163 10.0453ZM20 9.01078C22.7962 9.01078 25.3548 10.0595 27.2981 11.7791C27.1025 12.0586 25.4386 14.2817 21.5239 15.7497C19.7203 12.4363 17.7212 9.72383 17.4136 9.30438C18.2384 9.10875 19.1052 9.01078 20 9.01078Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    )}
                    {card.github && (
                      <a
                        href={card.github}
                        target="_blank"
                        rel="noreferrer"
                        className="icons pb-2"
                      >
                        <svg
                          width="35"
                          height="35"
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
                    )}
                    {card.web && (
                      <a
                        href={card.web}
                        target="_blank"
                        rel="noreferrer"
                        className="icons pb-2"
                      >
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 40 40"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95435 31.0457 0 20 0C8.95428 0 0 8.95435 0 20C0 31.0457 8.95428 40 20 40ZM25.4602 20.9519C25.6941 21.184 26.0098 21.3147 26.3393 21.3162C26.6688 21.3147 26.9845 21.184 27.2184 20.9519L29.8933 18.3021C30.3604 17.8356 30.7309 17.2815 30.9837 16.6718C31.2365 16.0619 31.3666 15.4082 31.3666 14.748C31.3666 14.0879 31.2365 13.4342 30.9837 12.8245C30.7309 12.2146 30.3604 11.6605 29.8933 11.194L28.1226 9.42334C27.1649 8.50964 25.8922 8 24.5685 8C23.245 8 21.9722 8.50964 21.0145 9.42334L18.3521 12.0857C18.1613 12.3278 18.0661 12.6316 18.0848 12.9393C18.1035 13.2471 18.2347 13.5372 18.4534 13.7544C18.6722 13.9717 18.9633 14.1008 19.2711 14.1173C19.579 14.1338 19.8821 14.0365 20.1229 13.8439L22.7853 11.1815C23.2656 10.7275 23.9014 10.4746 24.5623 10.4746C25.2231 10.4746 25.859 10.7275 26.3393 11.1815L28.1226 12.9647C28.3561 13.198 28.5414 13.4751 28.6678 13.7799C28.7942 14.0848 28.8593 14.4117 28.8593 14.7418C28.8593 14.9109 28.8422 15.0791 28.8085 15.244C28.7765 15.401 28.7294 15.5549 28.6678 15.7036C28.5414 16.0085 28.3561 16.2855 28.1226 16.5188L25.4602 19.1812C25.2263 19.4165 25.095 19.7347 25.095 20.0665C25.095 20.3983 25.2263 20.7167 25.4602 20.9519ZM14.798 31.2999C14.1382 31.3005 13.4847 31.171 12.8749 30.9188C12.2651 30.6667 11.7109 30.297 11.244 29.8306L9.47327 28.0599C9.00623 27.5934 8.63574 27.0393 8.38293 26.4296C8.13013 25.8197 8 25.166 8 24.5059C8 23.8457 8.13013 23.192 8.38293 22.5822C8.63574 21.9724 9.00623 21.4183 9.47327 20.9518L12.1483 18.2894C12.3903 18.0985 12.6942 18.0034 13.0019 18.0221C13.3096 18.0408 13.5997 18.172 13.817 18.3907C14.0342 18.6095 14.1633 18.9005 14.1799 19.2084C14.1964 19.5162 14.099 19.8195 13.9064 20.0602L11.244 22.7225C11.0105 22.9558 10.8253 23.2328 10.6989 23.5377C10.5724 23.8427 10.5074 24.1696 10.5074 24.4996C10.5074 24.8297 10.5724 25.1565 10.6989 25.4614C10.774 25.6428 10.8701 25.8145 10.9848 25.9728C11.0628 26.0804 11.1495 26.1821 11.244 26.2766L13.0273 28.0599C13.5076 28.5138 14.1434 28.7667 14.8043 28.7667C15.4652 28.7667 16.1011 28.5138 16.5814 28.0599L19.2437 25.3975C19.3533 25.2585 19.491 25.1443 19.6479 25.0623C19.7373 25.0155 19.8318 24.9799 19.9291 24.9558C20.0026 24.9376 20.0778 24.9261 20.1538 24.9215C20.3304 24.9108 20.5074 24.9376 20.673 25C20.8386 25.0625 20.9891 25.1592 21.1147 25.2839C21.2404 25.4086 21.3381 25.5585 21.4018 25.7236C21.4654 25.8888 21.4934 26.0656 21.4839 26.2423C21.4745 26.4189 21.4277 26.5918 21.3469 26.7491C21.3073 26.826 21.26 26.8986 21.2059 26.9653C21.1493 27.0353 21.0851 27.0991 21.0145 27.1556L18.3521 29.8181C17.8863 30.2866 17.3326 30.6588 16.7227 30.9131C16.1129 31.1674 15.4588 31.2988 14.798 31.2999ZM15.2076 24.7769C15.3606 24.8394 15.5245 24.8711 15.6898 24.8701C16.0192 24.8688 16.3349 24.7379 16.5688 24.5059L24.5685 16.5188C24.6335 16.4543 24.691 16.3832 24.7403 16.3066C24.7803 16.2444 24.8149 16.1787 24.8434 16.1101C24.9072 15.957 24.94 15.7928 24.94 15.6271C24.94 15.4613 24.9072 15.2971 24.8434 15.1442C24.7797 14.9911 24.6862 14.8522 24.5685 14.7355C24.3333 14.5016 24.015 14.3702 23.6832 14.3702C23.3514 14.3702 23.0331 14.5016 22.7978 14.7355L14.7981 22.7227C14.6804 22.8394 14.587 22.9783 14.5232 23.1313C14.4594 23.2843 14.4266 23.4485 14.4266 23.6143C14.4266 23.78 14.4594 23.9442 14.5232 24.0973C14.587 24.2502 14.6804 24.3892 14.7981 24.5059C14.9154 24.6223 15.0546 24.7144 15.2076 24.7769Z"
                            fill="currentColor"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                  <div className="tags">
                    {card.tech && (
                      card.tech.map((teches, index)=>(
                        <p key={index} className="tag">{teches}</p>
                      ))
                    )}
                  </div>
                </div>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
