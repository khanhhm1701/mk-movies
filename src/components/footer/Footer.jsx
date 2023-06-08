import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from 'assets/footer-bg.jpg';
import logo from 'assets/mklogo.png';

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <img src={logo} alt="" />
                        <Link to="/">mkMovies</Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <Link to="/">FAQ</Link>
                        <Link to="/">Invester Relations</Link>
                        <Link to="/">Privacy</Link>
                        <Link to="/">Speed Test</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Help Center</Link>
                        <Link to="/">Jobs</Link>
                        <Link to="/">Cookies Preferences</Link>
                        <Link to="/">Legal Notices</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Account</Link>
                        <Link to="/">Ways yo Watch</Link>
                        <Link to="/">Corporate Information</Link>
                        <Link to="/">Only on mkMovies</Link>
                    </div>
                    <div className="footer__content__menu">
                        <Link to="/">Media Center</Link>
                        <Link to="/">Terms of Use</Link>
                        <Link to="/">Contact Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
