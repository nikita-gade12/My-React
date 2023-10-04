import React from 'react';

import logo from '../../asseta/logo.jpg';
import { LocationMarker, Inbox, Phone, Login , Users, Link } from 'heroicons-react';
import css from './Footer.module.css';

function Footer() {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={logo} alt="Amazon Logo" />
          <span>Amazon</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            <span className={css.pngline}>
              <LocationMarker className={css.Icon} aria-label="Location" />
              <span>111 North Avenue Orlando, FL 32801</span>
            </span>

            <span className={css.pngline}>
              
              <Inbox className={css.Icon} aria-label="Email" />
              <a href='mailto:support0amazon.com'>support0amazon.com</a>
            </span>

            <span className={css.pngline}>
              <Phone className={css.Icon} aria-label="Phone" />
              <a href='tel:352-306-4415'>352-306-4415</a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngline}>
              <Login className={css.Icon} />
             sing In
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngline}>
              <Users className={css.Icon}  />
              <a href='/about'>
                <p>About us</p>
              </a>
            </span>
          </div>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngline}>
              <Link className={css.Icon} aria-label="Privacy & Terms" />
              <p>Safety, Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>

        <div className={css.copyright}>
          <span>Copyright 2022 by Amazon, Inc</span>
          <span>All rights reserved</span>
        </div>
    </div>
  );
}

export default Footer;
