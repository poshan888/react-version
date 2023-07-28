import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Aos from 'aos';
import 'aos/src/sass/aos.scss';

const Sidebar = () => {
  Aos.init();
  const [activePage, setActivePage] = useState('/');

  const handleSetActivePage = (page) => {
    setActivePage(page);
  };
  return (
    <aside id="asidePanel" data-aos="fade-left" data-aos-duration="1500">
        <ul className="side-link-listing">
          <li>
            <NavLink title="Build a Portfolio" className="d-flex flex-column align-items-center text-center"
              to="/build-portfolio"
              activeClassName="active"
              onClick={() => handleSetActivePage('/build-portfolio')}
            >
              <span className="capshift-icn_build_a_portfolio mb-2"></span>
              <span className="aside-menu-text">Build a Portfolio</span>
            </NavLink>
          </li>
          <li>
            <NavLink title="My Investments" className="d-flex flex-column align-items-center text-center"
              to="/my-investments"
              activeClassName="active"
              onClick={() => handleSetActivePage('/my-investments')}
            >
              <span className="capshift-icn_my_investments mb-2"></span>
              <span className="aside-menu-text">My Investments</span>
            </NavLink>
          </li>
          <li>
            <NavLink title="My Deals" className="d-flex flex-column align-items-center text-center" 
              exact
              to="/"
              activeClassName="active"
              onClick={() => handleSetActivePage('/')}
              >
              <span className="capshift-icn_my_deals mb-2"></span>
              <span className="aside-menu-text">My Deals</span>
            </NavLink>
          </li>
          <li>
            <NavLink title="Upload a Deal" className="d-flex flex-column align-items-center text-center"
              to="/upload-deal"
              activeClassName="active"
              onClick={() => handleSetActivePage('/upload-deal')}
            >
              <span className="capshift-icn_upload_a_deal mb-2"></span>
              <span className="aside-menu-text">Upload a Deal</span>
            </NavLink>
          </li>
        </ul>
      </aside>
  )
}

export default Sidebar