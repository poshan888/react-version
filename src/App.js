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
          <Route path="/upload-deal" element={<h1>Upload Deal</h1>} />
          <Route path="/my-investments" element={<h1>My Investments</h1>} />
          <Route path="/build-portfolio" element={<h1>build-portfolio</h1>} />
          {/* <Route path="/" element={<MyDeals />} />
          <Route path="/" element={<MyDeals />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;