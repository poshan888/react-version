import React from 'react'
import Aos from 'aos';
import 'aos/src/sass/aos.scss';

const index = () => {
  Aos.init();

  return (
    <header data-aos="fade-down" data-aos-duration="1000">
      <nav className="navbar navbar-expand-md bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler navbar-brand d-flex align-items-center gap-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="capshift-menu text-info"></span> <img src="../../../src/assets/images/webp/logo.webp" alt="HTest Logo" srcSet="../../../src/assets/images/webp/logo.webp" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-md-center">
              <li className="nav-item">
                <button type="button" className="btn btn-icon btn-white nav-link me-3" aria-label="Search">
                  <span className="capshift-search"></span>
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="btn btn-icon btn-white nav-link" aria-label="Notifications">
                  <span className="capshift-notifications"></span>
                </button>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className="capshift-user"></span> John Fowler
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><span className="capshift-Financials me-2"></span> Dashboard</a></li>
                  <li><a className="dropdown-item" href="#"><span className="capshift-edit me-2"></span> Edit Profile</a></li>
                  <li><a className="dropdown-item" href="#"><span className="capshift-moderate me-2"></span> Activity</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default index