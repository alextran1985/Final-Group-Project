import React from 'react';
import NavBarTop from './components/NavBarTop/NavBarTop';
import NavBarBottom from './components/NavBarBottom/NavBarBottom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div>
      <NavBarTop />
      <NavBarBottom />
      <Header />
      <Footer />
    </div>
  );
};

export default App;
