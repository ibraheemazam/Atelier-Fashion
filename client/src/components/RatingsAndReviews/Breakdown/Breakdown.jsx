import React from 'react';
import PropTypes from 'prop-types';
import Summary from './Summary';
import RatingBreakdown from './RatingBreakdown';
import LengthBreakdown from './LengthBreakdown';

function Breakdown({ revMeta, filterReviews }) {
  if (!revMeta.product_id) {
    return (
      <div />
    );
  }

  return (
    <div>
      RATINGS &#38; REVIEWS
      <Summary revMeta={revMeta} />
      <RatingBreakdown revMeta={revMeta} filterReviews={filterReviews} />
      <br />
      <LengthBreakdown revMeta={revMeta} />
    </div>
  );
}

Breakdown.propTypes = {
  revMeta: PropTypes.shape({
    characteristics: PropTypes.shape({}),
    product_id: PropTypes.string,
    ratings: PropTypes.shape({}),
    recommended: PropTypes.shape({
      true: PropTypes.string,
      false: PropTypes.string,
    }),
  }).isRequired,
};

export default Breakdown;
