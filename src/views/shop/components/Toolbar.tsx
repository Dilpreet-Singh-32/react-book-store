import React from 'react';

interface ToolbarProps {}

export const Toolbar: React.FunctionComponent<ToolbarProps> = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="shop__list__wrapper d-flex flex-wrap flex-md-nowrap justify-content-between">
          <div className="shop__list nav justify-content-center" role="tablist">
            <a
              className="nav-item nav-link active"
              data-toggle="tab"
              href="#nav-grid"
              role="tab"
            >
              <i className="fa fa-th"></i>
            </a>
            <a
              className="nav-item nav-link"
              data-toggle="tab"
              href="#nav-list"
              role="tab"
            >
              <i className="fa fa-list"></i>
            </a>
          </div>
          <p>Showing 1–12 of 40 results</p>
          <div className="orderby__wrapper">
            <span>Sort By</span>
            <select className="shot__byselect">
              <option>Default sorting</option>
              <option>HeadPhone</option>
              <option>Furniture</option>
              <option>Jewellery</option>
              <option>Handmade</option>
              <option>Kids</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
