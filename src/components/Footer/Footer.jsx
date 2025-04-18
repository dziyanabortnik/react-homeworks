import React, { Component } from 'react';
import './Footer.css';
import logoImage from './../../assets/icons/logo.svg';
import instagramImage from './../../assets/icons/instagram.svg';
import twitterImage from './../../assets/icons/twitter.svg';
import youtubeImage from './../../assets/icons/youtube.svg';

class Footer extends Component {
    render() {
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
                            <li><a href="#home">Home</a></li>
                            <li><a href="#order">Order</a></li>
                            <li><a href="#faq">FAQ</a></li>
                            <li><a href="#contact">Contact</a></li>
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
                            <li><a href="#home">More Cloneables</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="divider"/>

            <div className="footer-bottom">
                <p>Built by <span>Flowbase</span> · Powered by  <span>Webflow</span></p>
                <div className='social'>
                    <a href="#">
                        <img src={instagramImage} alt="Instagram" className="Instagram" />
                    </a>
                    <a href="#">
                        <img src={twitterImage} alt="Twitter" className="Twitter" />
                    </a>
                    <a href="#">
                        <img src={youtubeImage} alt="Youtube" className="Youtube" />
                    </a>
                </div>
            </div>
            </div>
        </footer>
    );
    }
}

export default Footer;
