import React from 'react';

import { Slide } from '../../shared/components';

interface ShopGridProps {}

export const ShopGrid: React.FunctionComponent<ShopGridProps> = () => {
  return (
    <div
      className="shop-grid tab-pane fade show active"
      id="nav-grid"
      role="tabpanel"
    >
      <div className="row">
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
        <Slide
          authorName="Guru Goind Singh"
          hotLabel="HOT"
          originalPrice={39.75}
          salesPrice={35.99}
          classes="product product__style--3 col-lg-4 col-md-4 col-sm-6 col-12"
        />
      </div>
      <ul className="wn__pagination">
        <li className="active">
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">
            <i className="fa fa-chevron-right"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
