import React from 'react'; 

const Footer = () => {
  return (
    <footer>
      <div className="container flex">
        <div className="footer flex">
          <div className="footerlogo">
            <h1>The Cooking Pot</h1>
            <p>
              We bring together food enthusiasts from around the globe to share, discover, and enjoy delicious recipes.
            </p>
            <div className="fsocial">
              <a href="http://facebook.com/" target="_blank" title="facebook" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="http://x.com/" target="_blank" title="x" rel="noopener noreferrer">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a href="http://instagram.com/" target="_blank" title="instagram" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="http://youtube.com/" target="_blank" title="youtube" rel="noopener noreferrer">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footernav">
            <h3>Recipes</h3>
            <ul className="flex">
              <li><a href="/">Breakfast</a></li>
              <li><a href="/">Lunch</a></li>
              <li><a href="/">Dinner</a></li>
              <li><a href="/">Dessert</a></li>
            </ul>
          </div>

          <div className="footernav">
            <h3>Profile</h3>
            <ul className="flex">
              <li><a href="/">Friends</a></li>
              <li><a href="/">Favorites</a></li>
              <li><a href="/">History</a></li>
              <li><a href="/">Settings</a></li>
            </ul>
          </div>

          <div className="footernav">
            <h3>About</h3>
            <ul className="flex">
              <li><a href="/">Help & Support</a></li>
              <li><a href="/">Privacy Policy</a></li>
              <li><a href="/">Terms of Use</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="flex">
          <h5>&copy; 2024 All Rights Reserved</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
