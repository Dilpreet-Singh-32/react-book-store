import React from 'react';

import img1 from '../../../assets/images/books/11.jpg';
import img2 from '../../../assets/images/books/7.jpg';

interface ShopListItemProps {
  index: number;
  title: string;
  rating: number;
  originalPrice: number;
  salesPrice: number;
}

export const ShopListItem: React.FunctionComponent<ShopListItemProps> = ({
  index,
  title,
  originalPrice,
  salesPrice,
}) => {
  const classes = index > 0 ? 'list__view mt--40' : 'list__view';

  return (
    <div className={classes}>
      <div className="thumb">
        <a className="first__img" href="single-product.html">
          <img src={img1} alt="product images" />
        </a>
        <a className="second__img animation1" href="single-product.html">
          <img src={img2} alt="product images" />
        </a>
      </div>
      <div className="content">
        <h2>
          <a href="single-product.html">{title}</a>
        </h2>
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
        <ul className="prize__box">
          <li>${salesPrice}</li>
          <li className="old__prize">${originalPrice}</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla
          augue nec est tristique auctor. Donec non est at libero vulputate
          rutrum. Morbi ornare lectus quis justo gravida semper. Nulla tellus
          mi, vulputate adipiscing cursus eu, suscipit id nulla.
        </p>
        <ul className="cart__action d-flex">
          <li className="cart">
            <a href="cart.html">Add to cart</a>
          </li>
          <li className="wishlist">
            <a href="cart.html"></a>
          </li>
          <li className="compare">
            <a href="cart.html"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};
