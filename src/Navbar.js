import React, { useState } from "react";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Sourabh
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${show ? "show" : ""}`}>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="Home">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="About">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="Skills"
                >
                  SKILLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="Services"
                >
                  SERVICES
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="About">
                  CONTACT
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn  btn-style" type="signup">
                Sign up
              </button>
              <button className="btn  btn-style" type="login">
                Log in
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
