import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout';
import MyDeals from './components/my-deals';
import './scss/style.scss';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MyDeals />} />
          <Route path="/build-portfolio" element={<h1>build-portfolio</h1>} />
          {/* <Route path="/" element={<MyDeals />} />
          <Route path="/" element={<MyDeals />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;