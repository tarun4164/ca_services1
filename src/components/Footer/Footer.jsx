import React from 'react';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__row">
          <div className="footer__nav-row">
            <div className="footer__logo">
              <img src="#" alt="Company Logo" />
            </div>
            <div className="footer__navigation">
              <ul className="footer__navigation-list">
                <li className="footer__navigation-list__item">About Us</li>
                <li className="footer__navigation-list__item">Services</li>
                <li className="footer__navigation-list__item">GST</li>
                <li className="footer__navigation-list__item">IT Returns</li>
              </ul>
            </div>
            <div className="footer__social">
              <ul className="footer__social-list">
                <li className="footer__social-list__item">LinkedIn</li>
                <li className="footer__social-list__item">Facebook</li>
                <li className="footer__social-list__item">Twitter</li>
              </ul>
            </div>
          </div>
          <div className="footer__contact-row">
            <div className="footer__contact">
              <h3 className="footer__contact-header">Contact Us</h3>
              <div className="footer__contact-info">
                <div className="footer__contact-info__item flex-row">
                  <span>Phone:</span><span>8977116416</span>
                </div>
                <div className="footer__contact-info__item flex-row">
                  <span>Email:</span><span>tarunbommu@gmail.com</span>
                </div>
                <div className="footer__contact-address">
                  <div>1234 Street, 456 City, 78910 State</div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__copyright">
            <span>© 2024 Your Company Name. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
