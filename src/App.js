import React, { Component } from 'react';
import './App.css';

import ReviewList from './components/review-list/ReviewList';

const REVIEWS = [
  {
    country: 'US',
    reviewId: 'R1SQ32067PGIK5',
    childAsin: 'B01353CVBO',
    authorId: '',
    title: 'Nice rattle sound',
    content: 'Just as cute as it can be!!! Nice rattle sound!!!',
    stars: 5,
    verified: true,
    reviewCreated: 1517961600000,
    productImg: '61YqZpvCyaL',
    productTitle: "Bearington Baby Lil' Spout Plush Elephant Shaker Rattle, 5",
    watched: false,
    created: 1518038627000
  },
  {
    country: 'US',
    reviewId: 'R3TGD8Y79S18UQ',
    childAsin: 'B01M3S7P22',
    authorId: '',
    title: 'Smaller than I thought.',
    content:
      'Smaller than I though it was going to be. Also- when I washed it, the fuzz got all over everything else in the washer/dryer.',
    stars: 3,
    verified: true,
    reviewCreated: 1517616000000,
    productImg: '51+gRXywflL',
    productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
    watched: false,
    created: 1517954722000
  },
  {
    country: 'US',
    reviewId: 'RML4KUCLVHE0S',
    childAsin: 'B01M3S7P22',
    authorId: '',
    title: 'Four Stars',
    content: 'Thin but OK',
    stars: 4,
    verified: false,
    reviewCreated: 1517184000000,
    productImg: '51+gRXywflL',
    productTitle: 'Hudson Baby Sherpa Blanket with Satin Binding, Pink',
    watched: false,
    created: 1517430130000
  },
  {
    country: 'US',
    reviewId: 'R167JDRHY8RJTU',
    childAsin: 'B01353CVBO',
    authorId: '',
    title: 'Five Stars',
    content: 'Absolutely adorable',
    stars: 5,
    verified: true,
    reviewCreated: 1517011200000,
    productImg: '61YqZpvCyaL',
    productTitle: "Bearington Baby Lil' Spout Plush Elephant Shaker Rattle, 5",
    watched: false,
    created: 1517430006000
  }
];

class App extends Component {
  render() {
    return (
      <div className="container">
        <ReviewList reviews={REVIEWS} />
      </div>
    );
  }
}

export default App;
