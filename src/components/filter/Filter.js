import React, { Component } from 'react';
import './Filter.css';

const ENTER_KEY = 13;

export default class Filter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

    this.state = {
      query: '',
      groupBy: '',
      orderBy: 'desc',
      oneStar: true,
      twoStar: true,
      threeStar: true,
      fourStar: true,
      fiveStar: true
    };
  }

  handleKeyPress(event) {
    if (event.keyCode === ENTER_KEY) {
      this.handleRefreshClick();
    }
  }

  handleRefreshClick() {
    this.props.setFilter(this.state);
  }

  handleChange(event) {
    const target = event.target;
    let { name, value } = target;

    value = target.type === 'checkbox' ? target.checked : value;

    this.setState({
      [name]: value
    });
  }

  render() {
    const {
      query,
      groupBy,
      orderBy,
      oneStar,
      twoStar,
      threeStar,
      fourStar,
      fiveStar
    } = this.state;
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
              onKeyDown={this.handleKeyPress}
            />
            <i className="fas fa-search" />
          </div>

          <div className="row">
            <div className="col form-group dropdown-field">
              <select
                className="form-control"
                name="groupBy"
                value={groupBy}
                onChange={this.handleChange}
              >
                <option selected disabled value="">
                  Group By
                </option>
                <option value="day">Group by day</option>
                <option value="week">Group by week</option>
                <option value="month">Group by month</option>
              </select>
              <i className="fas fa-caret-down" />
            </div>

            <div className="col form-group dropdown-field">
              <select
                disabled={groupBy === ''}
                className="form-control"
                name="orderBy"
                value={orderBy}
                onChange={this.handleChange}
              >
                <option selected disabled value="">
                  Order by
                </option>
                <option value="asc">Order by Asc</option>
                <option value="desc">Order by Desc</option>
              </select>
              <i className="fas fa-caret-down" />
            </div>
          </div>

          <div className="form-group">
            <h6 className="filterby">FILTER BY:</h6>
            <label className="squarly-checkbox">
              <input
                type="checkbox"
                checked={oneStar}
                name="oneStar"
                onChange={this.handleChange}
              />
              <span>
                1 <i className="fas fa-star" />
              </span>
            </label>
            <label className="squarly-checkbox">
              <input
                type="checkbox"
                checked={twoStar}
                name="twoStar"
                onChange={this.handleChange}
              />
              <span>
                2 <i className="fas fa-star" />
              </span>
            </label>
            <label className="squarly-checkbox">
              <input
                type="checkbox"
                checked={threeStar}
                name="threeStar"
                onChange={this.handleChange}
              />
              <span>
                3 <i className="fas fa-star" />
              </span>
            </label>
            <label className="squarly-checkbox">
              <input
                type="checkbox"
                checked={fourStar}
                name="fourStar"
                onChange={this.handleChange}
              />
              <span>
                4 <i className="fas fa-star" />
              </span>
            </label>
            <label className="squarly-checkbox">
              <input
                type="checkbox"
                checked={fiveStar}
                name="fiveStar"
                onChange={this.handleChange}
              />
              <span>
                5 <i className="fas fa-star" />
              </span>
            </label>
          </div>
        </div>

        <div className="refresh-button">
          <button className="btn btn-default" onClick={this.handleRefreshClick}>
            REFRESH
          </button>
        </div>
      </div>
    );
  }
}
