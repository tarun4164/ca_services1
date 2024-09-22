import React from "react";
import './Hero.scss';
import caservices from '../../assets/caservices.png';

const Hero = ()=>{
    return(
        <section className="hero">
            <div className="hero__container">
                <div className="hero__row">
                    <div className="hero__content-info">
                        <div className="hero__header">CA serviceses heading</div>
                        <div className="hero__description">Professional CA services to manage your accounting and financial needs efficiently.</div>
                        <div className="hero__button">Get Started</div>
                    </div>
                    <div className="hero__image-container">
                        < img className="hero__img" src={caservices} alt="hero-photo"/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Hero;