import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
  render() {
    return (
      <div className="filter-container">
        <div className="form-group search-field">
          <input
            type="text"
            name="searchQuery"
            placeholder="Search"
            className="form-control"
          />
          <i className="fas fa-search" />
        </div>

        <div className="row">
          <div className="col form-group dropdown-field">
            <select className="form-control">
              <option disabled>Group By</option>
              <option selected>Group by day</option>
              <option>Group by week</option>
              <option>Group by month</option>
            </select>
            <i className="fas fa-caret-down" />
          </div>

          <div className="col form-group dropdown-field">
            <select className="form-control">
              <option disabled>Order By</option>
              <option selected>ASC</option>
              <option>DESC</option>
            </select>
            <i className="fas fa-caret-down" />
          </div>
        </div>

        <div className="form-group">
          <h6>FILTER BY:</h6>
          <label className="squarly-checkbox">
            <input type="checkbox" />
            <span>
              1 <i className="fas fa-star" />
            </span>
          </label>
          <label className="squarly-checkbox">
            <input type="checkbox" />
            <span>
              2 <i className="fas fa-star" />
            </span>
          </label>
          <label className="squarly-checkbox">
            <input type="checkbox" />
            <span>
              3 <i className="fas fa-star" />
            </span>
          </label>
          <label className="squarly-checkbox">
            <input type="checkbox" />
            <span>
              4 <i className="fas fa-star" />
            </span>
          </label>
          <label className="squarly-checkbox">
            <input type="checkbox" />
            <span>
              5 <i className="fas fa-star" />
            </span>
          </label>
        </div>
      </div>
    );
  }
}
