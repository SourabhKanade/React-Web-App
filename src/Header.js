import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start prog1-img">
              <h1 className="display-2 display-bottom">Hi, I'm Sourabh</h1>
              <h2 className="main-hero-title display-bottom">
                A frontend developer
              </h2>
              <p className="main-hero-para">
                I enjoy solving complex problems. I can be relied upon to help
                your company achieve its goals by providing sustainable and
                scalable solutions.
              </p>
              <div className="social-links me-auto mb-4 mb-lg-0 Icon">
                <a
                  className="root-icon"
                  href="github"
                  // target="_blank"
                  // rel="no opener noreferrer"
                  // itemprop="sameAs"
                >
                  <button
                    // className="buttonBase-root IconButton-root iconButton-colorInherent "
                    className="buttonBase-root IconButton-root iconButton-colorInherent "
                    // tabIndex="0"
                    // type="button"
                    // aria-label="Github profile"
                    // aria-haspopup="true"
                  >
                    <span className="button-icon">
                      <svg
                        className="Icon-root Icon-fontSizeLarge"
                        // focusable="false"
                        // aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1 1.8 2.8 1.3 3.5 1 0-.8.4-1.3.7-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8 0 3.2.9.8 1.3 1.9 1.3 3.2 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1 .9 2.2v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"></path>
                      </svg>
                    </span>
                  </button>
                </a>
                <a
                  className="root-icon"
                  href="Linkedin"
                  // target="_blank"
                  // rel="no opener noreferrer"
                  // itemprop="sameAs"
                >
                  <button
                    className="buttonBase-root IconButton-root iconButton-colorInherent "
                    // tabIndex="0"
                    // type="button"
                    // aria-label="Linkedin profile"
                    // aria-haspopup="true"
                  >
                    <span className="button-icon">
                      <svg
                        className="Icon-root Icon-fontSizeLarge"
                        // focusable="false"
                        // aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
                <a
                  className="root-icon"
                  href="Twitter"
                  // target="_blank"
                  rel="no opener noreferrer"
                  itemprop="sameAs"
                >
                  <button
                    className="buttonBase-root IconButton-root iconButton-colorInherent "
                    // tabIndex="0"
                    // type="button"
                    // aria-label="Twitter profile"
                    // aria-haspopup="true"
                  >
                    <span className="button-icon">
                      <svg
                        className="Icon-root Icon-fontSizeLarge"
                        // focusable="false"
                        // aria-hidden="true"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
              <div>
                <a
                  className="root-icon"
                  href="Contact page"
                  // target="_blank"
                  rel="no opener noreferrer"
                  itemprop="sameAs"
                >
                  <button
                    className="MuiButtonBase-root MuiButton-root MuiButton-contained jss310 MuiButton-containedSecondary MuiButton-disableElevation"
                    type="button"
                  >
                    <span className="MuiButton-label">
                      <span className="MuiButton-startIcon MuiButton-iconSizeMedium">
                        <svg className="MuiSvgIcon-root" viewBox="0 0 24 24">
                          <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path>
                        </svg>
                        GET IN TOUCH
                      </span>
                    </span>
                    <span className="MuiTouchRipple-root"></span>
                  </button>
                </a>
              </div>
            </div>
            {/*  --------------- main header right side--------------  */}
            <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center prog2-img">
              <img
                src="./images/programmer-img.svg"
                alt="heroimg"
                className="img-fluid"
              />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
