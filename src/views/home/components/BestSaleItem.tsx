import React from 'react';

import image from '../../../assets/images/books/20.jpg';

interface BestSaleItemProps {
  active?: boolean;
}

export const BestSaleItem: React.FunctionComponent<BestSaleItemProps> = ({
  active,
}) => {
  const classes = active
    ? 'product product__style--3 slick-slide slick-center'
    : 'product product__style--3 slick-slide';

  return (
    <div className={classes} tabIndex={-1} style={{ width: '193px' }}>
      <div className="product__thumb">
        <a className="first__img" href="single-product.html">
          <img src={image} alt="product image" />
        </a>
      </div>
      <div className="product__content content--center">
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
