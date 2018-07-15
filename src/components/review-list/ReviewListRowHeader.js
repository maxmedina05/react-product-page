import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import ReviewListRow from './ReviewListRow';
import './ReviewListRowHeader.css';

window.moment = Moment;
const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const getMonthName = dateString => {
  const monthNumber = dateString.split('-')[1];
  const monthIndex = Number.parseInt(monthNumber, 10) - 1;

  return MONTH_NAMES[monthIndex];
};

const getWeekTitle = dateString => {
  const date = new Moment(dateString);
  const startOfWeek = date.startOf('week').toDate();
  const endOfWeek = date.endOf('week').toDate();

  let startMonth = startOfWeek.getMonth() + 1;
  let endMonth = endOfWeek.getMonth() + 1;
  let startDay = startOfWeek.getDate();
  let endDay = endOfWeek.getDate();

  startMonth = startMonth < 10 ? '0' + startMonth : startMonth;
  endMonth = endMonth < 10 ? '0' + endMonth : endMonth;
  startDay = startDay < 10 ? '0' + startDay : startDay;
  endDay = endDay < 10 ? '0' + endDay : endDay;

  const title = `${startDay}.${startMonth} - ${endDay}.${endMonth}`;
  return title;
};

const getDayTitle = dateString => {
  const date = new Moment(dateString);
  return date.format('DD.MM.YYYY');
};

const getHeaderTitle = (header, groupBy) => {
  switch (groupBy) {
    case 'month':
      return getMonthName(header);
    case 'day':
      return getDayTitle(header);
    case 'week':
      return getWeekTitle(header);
    default:
      return header;
  }
};

const ReviewListHeaderRow = ({ header, reviews, groupBy }) => {
  const title = getHeaderTitle(header, groupBy);
  const reviewList = reviews.map(review => (
    <ReviewListRow key={review.reviewId} review={review} />
  ));

  return (
    <div className="review-list-row-header">
      <h6>{title}</h6>
      <div>{reviewList}</div>
    </div>
  );
};

ReviewListHeaderRow.propTypes = {
  header: PropTypes.string.isRequired,
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewId: PropTypes.string,
      childAsin: PropTypes.string,
      reviewCreated: PropTypes.number,
      content: PropTypes.string,
      title: PropTypes.string,
      productTitle: PropTypes.string,
      productImg: PropTypes.string,
      stars: PropTypes.number
    })
  )
};

export default ReviewListHeaderRow;
