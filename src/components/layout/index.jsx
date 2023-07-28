import React from 'react';
import Header from '../header';
import Sidebar from '../sidebar';
import Footer from '../footer';
import Aos from 'aos';
import 'aos/src/sass/aos.scss';

const Layout = ({children}) => {
  Aos.init();
  
  return (
    <main className="d-flex flex-column h-100">

    <Header />

    
    <section className="mid-body d-flex">
    
      <Sidebar />

      <section className="content-body" data-aos="fade-right" data-aos-duration="1500">
        {children}
      </section>
      
    </section>
    

    <Footer />
    
  </main>
  )
}

export default Layout