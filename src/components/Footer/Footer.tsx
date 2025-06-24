import React from 'react';
import './Footer.css';
import logoImage from './../../assets/icons/logo.svg';
import instagramImage from './../../assets/icons/instagram.svg';
import twitterImage from './../../assets/icons/twitter.svg';
import youtubeImage from './../../assets/icons/youtube.svg';
import instagramDark from './../../assets/icons/dark-theme/instagram.svg';
import twitterDark from './../../assets/icons/dark-theme/twitter.svg';
import youtubeDark from './../../assets/icons/dark-theme/youtube.svg';
import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';

const Footer: React.FC = () =>  {
  const { theme } = useContext(ThemeContext);

  const instagramIcon = theme === 'dark' ? instagramDark : instagramImage;
  const twitterIcon = theme === 'dark' ? twitterDark : twitterImage;
  const youtubeIcon = theme === 'dark' ? youtubeDark : youtubeImage;
    return (
      <footer>
        <div className="container">
          <div className="footer-top">
            <div className="footer-logo">
              <a href="#">
                <img src={logoImage} alt="Logo" className="logo" />
              </a>
              <p>Takeaway & Delivery template</p>
              <p>for small - medium businesses.</p>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h3>Company</h3>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Order</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Template</h3>
                <ul>
                  <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Style Guide</a></li>
                  <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Changelog</a></li>
                  <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Licence</a></li>
                  <li><a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Webflow University</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>Flowbase</h3>
                <ul>
                  <li><a href="#">More Cloneables</a></li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="divider" />

          <div className="footer-bottom">
            <p>
              Built by <span>Flowbase</span> · Powered by <span>Webflow</span>
            </p>
            <div className='social'>
              <a href="#">
                <img src={instagramIcon} alt="Instagram" className="Instagram" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="Twitter" className="Twitter" />
              </a>
              <a href="#">
                <img src={youtubeIcon} alt="Youtube" className="Youtube" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
