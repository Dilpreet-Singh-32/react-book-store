import React from 'react';

import { Logo } from '../';

interface FooterProps {}

export const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer id="wn__footer" className="footer__area bg__cat--8 brown--color">
      <div className="footer-static-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__widget footer__menu">
                <div className="ft__logo">
                  <Logo />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered duskam alteration
                    variations of passages
                  </p>
                </div>
                <div className="footer__content">
                  <ul className="social__net social__net--2 d-flex justify-content-center">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                  <ul className="mainmenu d-flex justify-content-center">
                    <li>
                      <a href="index.html">Trending</a>
                    </li>
                    <li>
                      <a href="index.html">Best Seller</a>
                    </li>
                    <li>
                      <a href="index.html">All Product</a>
                    </li>
                    <li>
                      <a href="index.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="index.html">Blog</a>
                    </li>
                    <li>
                      <a href="index.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="copyright">
                <div className="copy__right__inner text-left">
                  <p>
                    Copyright <i className="fa fa-copyright"></i>
                    <a href="#">Boighor.</a> All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="payment text-right">
                <img src="images/icons/payment.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
