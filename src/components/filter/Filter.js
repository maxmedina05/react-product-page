import React, { Component } from 'react';
import './Filter.css';

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      query: ''
    };
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  }

  render() {
    const { query } = this.state;

    return (
      <div className="Filter">
        <div className="filter-container">
          <div className="form-group search-field">
            <input
              type="text"
              name="query"
              value={query}
              onChange={this.handleChange}
              placeholder="Search"
              className="form-control"
            />
            <i className="fas fa-search" />
          </div>

          <div className="row">
            <div className="col form-group dropdown-field">
              <select className="form-control">
                <option selected disabled>
                  Group By
                </option>
                <option>Group by day</option>
                <option>Group by week</option>
                <option>Group by month</option>
              </select>
              <i className="fas fa-caret-down" />
            </div>

            <div className="col form-group dropdown-field">
              <select className="form-control">
                <option selected disabled>
                  Order by
                </option>
                <option>Order by Asc</option>
                <option>Order by Desc</option>
              </select>
              <i className="fas fa-caret-down" />
            </div>
          </div>

          <div className="form-group">
            <h6 className="filterby">FILTER BY:</h6>
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

        <div className="refresh-button">
          <button className="btn btn-default">REFRESH</button>
        </div>
      </div>
    );
  }
}
