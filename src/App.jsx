import React, { useState } from 'react'
import Layout from '../Layout.js'
import HomePage from '../Pages/Home.jsx'
import AboutPage from '../Pages/About.jsx'
import InvestPage from '../Pages/Invest.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage setCurrentPage={setCurrentPage} />;
      case "About":
        return <AboutPage />;
      case "Invest":
        return <InvestPage />;
      default:
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <Layout currentPageName={currentPage}>
      {renderCurrentPage()}
    </Layout>
  );
}

export default App
