import React from 'react';
import Card from '../card';
import Aos from 'aos';
import 'aos/src/sass/aos.scss';

const MyDeals = () => {
  Aos.init();
  
  const data = [
    {id: 1,
      img: "../../assets/images/webp/img-1.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 2,
      img: "../../assets/images/webp/img-2.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 3,
      img: "../../assets/images/webp/img-3.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 4,
      img: "../../assets/images/webp/img-1.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 5,
      img: "../../assets/images/webp/img-2.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 6,
      img: "../../assets/images/webp/img-3.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 7,
      img: "../../assets/images/webp/img-1.webp",
      title:"US Liquid Impact Fund LLC"
    },
    {id: 8,
      img: "../../assets/images/webp/img-2.webp",
      title:"US Liquid Impact Fund LLC"
    },
  ]

  return (
    <>
      <section className="section-heading" data-aos="fade-right" data-aos-duration="1200">
          <h1 className="section-title">Explore Investments</h1>
          <div className="tab-action-btns">
            <button type="button" className="btn btn-icon" aria-labelledby="Search"><span className="capshift-search"></span></button>
            
            {/* <!-- ================================= Tab Title Sorting: Starts ================================= --> */}
            <ul className="nav nav-tabs" id="dealFilterTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="all-deals-tab" data-bs-toggle="tab" data-bs-target="#all-deals-tab-pane" type="button" role="tab" aria-controls="all-deals-tab-pane" aria-selected="true">All Deals</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="shortlisted-deals-tab" data-bs-toggle="tab" data-bs-target="#shortlisted-deals-tab-pane" type="button" role="tab" aria-controls="shortlisted-deals-tab-pane" aria-selected="false">Shortlisted Deals</button>
              </li>
            </ul>
            {/* <!-- ================================= Tab Title Sorting: Ends ================================= -->              */}
            
            <button type="button" className="btn btn-icon" aria-labelledby="Filter"><span className="capshift-filter"></span></button>
          </div>
        </section>
        
        <div className="service-type-alert-wrap d-flex align-items-center flex-wrap gap-md-3 gap-2 mb-md-4 mb-3">
          <div className="badge text-bg-primary d-flex justify-content-between align-items-center" data-aos="fade-right" data-aos-duration="1250">
            <span>Sustainable Agriculture</span>
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close">
              
            </button>
          </div>
          <div className="badge text-bg-info text-white d-flex justify-content-between align-items-center" data-aos="fade-right" data-aos-duration="1500">
            <span>Alternative Energy</span>
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close"></button>
          </div>
          <div className="badge text-bg-danger d-flex justify-content-between align-items-center" data-aos="fade-right" data-aos-duration="1750">
            <span>Boston</span>
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close"></button>
          </div>
          <div className="badge text-bg-success text-white d-flex justify-content-between align-items-center" data-aos="fade-right" data-aos-duration="2000">
            <span>Microfinance</span>
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close"></button>
          </div>
          <div className="badge text-bg-tertiary text-white d-flex justify-content-between align-items-center" data-aos="fade-right" data-aos-duration="2250">
            <span>Affordable Housing</span>
            <button type="button" className="btn-close btn-close-white ms-2" aria-label="Close"></button>
          </div>
        </div>
        
        <section className="service-card-container">
          <div className="row gy-4">
          {data.map((item,index) => <Card item={item} index={index} />)}
          </div>
        </section>
    </>
  )
}

export default MyDeals