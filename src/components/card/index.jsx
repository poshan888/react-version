import React from 'react'
import Aos from 'aos';
import 'aos/src/sass/aos.scss';

const Card = ({item,index}) => {
  Aos.init();

  return (
    <div className="col-xl-3 col-lg-4 col-md-6" key={index} data-aos="fade-right" data-aos-duration="1500">
      <div className="card service-card">
        <div className="card-header">
          <div className="card-header-top">
            <img src="/images/webp/domain_partner_logo.webp" alt="HTest Logo" srcSet="/images/webp/domain_partner_logo.webp" width="90" height="40" />
            <button type="button" className="btn btn-icon btn-white">
              <span className="capshift-star"></span>
            </button>
          </div>
          <img src={item.img} className="card-img" alt="US Liquid Impact Fund LLC" srcSet={item.img} />
          <div className="card-header-bottom">
            <h4 className="card-title text-uppercase">{item.title}</h4>
            <div className="d-flex align-items-center justify-content-between">
              <span className="d-inline-block text-truncate" style={{ maxWidth: "60%" }}>Foster development and low</span>
              <span>28 Days Left</span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="card-badges-wrap d-flex gap-2">
              <span className="badge text-secondary-emphasis bg-secondary-subtle">Global</span>
              <span className="badge text-success-emphasis bg-success-subtle">USA</span>
            </div>
            <a href="#/" className="types-read-more">+4</a>
          </div>
          <p className="card-text mb-4">Dedicated ESG fixed-income manager, low risk, high liquidity</p>
          <ul className="product-property-listing">
            <li className="product-property-item">
              <span className="product-property-label text-gray">Asset Class</span>
              <span className="product-property-value"><strong>Direct Equity</strong></span>
            </li>
            <li className="product-property-item">
              <span className="product-property-label text-gray">Offering</span>
              <span className="product-property-value"><strong>$500,00</strong></span>
            </li>
          </ul>
        </div>
        <div className="card-footer">
          <div className="card-action-btns d-flex gap-2">
            <button type="button" className="btn btn-info" aria-labelledby="Clean Energy">Clean Energy</button>
            <button type="button" className="btn btn-danger" aria-labelledby="Health">Health</button>
          </div>
          <a href="#/" className="types-read-more ms-2">+4</a>
        </div>
      </div>
    </div>
  )
}

export default Card