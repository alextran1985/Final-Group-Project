import React from 'react';
import NavBarTop from './NavBarTop/NavBarTop';
import NavBarBottom from './NavBarBottom/NavBarBottom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

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
