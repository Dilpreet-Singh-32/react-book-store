import React from 'react';

import { ShopListItem } from './ShopListItem';

interface ShopListProps {}

export const ShopList: React.FunctionComponent<ShopListProps> = () => {
  return (
    <div className="shop-grid tab-pane fade" id="nav-list" role="tabpanel">
      <div className="list__view__wrapper">
        <ShopListItem
          index={0}
          title="JANGNAMAH"
          rating={5}
          originalPrice={99.99}
          salesPrice={99.99}
        />
        <ShopListItem
          index={1}
          title="JANGNAMAH"
          rating={5}
          originalPrice={99.99}
          salesPrice={99.99}
        />
        <ShopListItem
          index={2}
          title="JANGNAMAH"
          rating={5}
          originalPrice={99.99}
          salesPrice={99.99}
        />
        <ShopListItem
          index={3}
          title="JANGNAMAH"
          rating={5}
          originalPrice={99.99}
          salesPrice={99.99}
        />
        <ShopListItem
          index={4}
          title="JANGNAMAH"
          rating={5}
          originalPrice={99.99}
          salesPrice={99.99}
        />
      </div>
      <ul className="wn__pagination mt--40" style={{ marginTop: '60px' }}>
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
