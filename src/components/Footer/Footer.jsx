import React from 'react'
import './Footer.scss'

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__container">
            <div className="footer__row">
                <div className="footer__nav-row">
                    <div className="footer__logo">
                        <img src="#" alt="logo" />
                    </div>
                    <div className="footer__navigation">
                        <ul className='footer__navigation-list'>
                            <li className="footer__navigation-listr__item" >about us</li>
                            <li className="footer__navigation-list__item" >services</li>
                            <li className="footer__navigation-list__item" >GST</li>
                            <li className="footer__navigation-list__item" >IT Returns</li>
                        </ul>
                    </div>
                    <div className="footer__social">
                        <ul className='footer__social-list'>
                            <li className='footer__social-list__item'>LinkedIN</li>
                            <li className='footer__social-list__item'>faceBook</li>
                            <li className='footer__social-list__item'>Twitter</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__contact-row">
                    <div className="footer__contact">
                        <h3 className='footer__contact-header'>Contact Us</h3>
                        <div className="footer__contact-info">
                            <div className="foooter__contact-info__item flex-row">
                                <span>phone:</span><span>8977116416</span>
                            </div>
                            <div className="footera__contact-info__item flex-row">
                                <span>Email:</span>
                                <span>tarunbommu@gmail.com</span>
                            </div>
                            <div className="footer__contact__address">
                                <div>1234 street, 456 city, 78910 state</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__copyright">
                    <span>© 2024 Your Company Name. All rights reserved.</span>
                </div>
            </div>
        </div>
    </div>
  )
}
