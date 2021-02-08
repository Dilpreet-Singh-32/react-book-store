import React from 'react';

import img1 from '../../../assets/images/books/7.jpg';
import img2 from '../../../assets/images/books/11.jpg';

interface SlideProps {
  authorName: string;
  hotLabel: 'BEST SALLER' | 'HOT';
  originalPrice: number;
  salesPrice: number;
}

export const Slide: React.FunctionComponent<SlideProps> = () => {
  return (
    <div className="product product__style--3 item">
      <div className="product__thumb">
        <a className="first__img" href="single-product.html">
          <img src={img1} alt="product image" />
        </a>
        <a className="second__img animation1" href="single-product.html">
          <img src={img2} alt="product image" />
        </a>
        <div className="hot__box">
          <span className="hot-label">BEST SALLER</span>
        </div>
      </div>
      <div className="product__content content--center">
        <h4>
          <a href="single-product.html">robin parrish</a>
        </h4>
        <ul className="prize d-flex">
          <li>$35.00</li>
          <li className="old_prize">$35.00</li>
        </ul>
        <div className="action">
          <div className="actions_inner">
            <ul className="add_to_links">
              <li>
                <a className="cart" href="cart.html">
                  <i className="fa fa-shopping-bag"></i>
                </a>
              </li>
              <li>
                <a className="wishlist" href="wishlist.html">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <a className="compare" href="#">
                  <i className="fa fa-heartbeat"></i>
                </a>
              </li>
              <li>
                <a
                  data-toggle="modal"
                  title="Quick View"
                  className="quickview modal-view detail-link"
                  href="#productmodal"
                >
                  <i className="fa fa-search"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="product__hover--content">
          <ul className="rating d-flex">
            <li className="on">
              <i className="fa fa-star-o"></i>
            </li>
            <li className="on">
              <i className="fa fa-star-o"></i>
            </li>
            <li className="on">
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li>
            <li>
              <i className="fa fa-star-o"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
