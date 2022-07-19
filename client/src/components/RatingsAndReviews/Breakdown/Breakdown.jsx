import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Summary from './Summary';
import RatingBreakdown from './RatingBreakdown';

function Breakdown({ revMeta }) {
  if (!revMeta.product_id) {
    return (
      <div />
    );
  }

  return (
    <div>
      RATINGS &#38; REVIEWS
      <Summary revMeta={revMeta} />
      <RatingBreakdown revMeta={revMeta} />
      <br />
      {Object.entries(revMeta.characteristics).map((charEntry) => (
        <div key={charEntry[1].id}>
          <div>
            {charEntry[0]}
            :&nbsp;
            <HorizontalProgFill width={(parseInt(charEntry[1].value, 10) / 5) * 100}>
              {Math.round(charEntry[1].value * 100) / 100}
            </HorizontalProgFill>
          </div>
          <br />
        </div>
      ))}

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

const HorizontalProgFill = styled.div`
  background: #666;
  height: 20px;
  width: ${(props) => props.width}%;
  color: #fff;
  text-align: center;
  font-family: "Lato","Verdana",sans-serif;
  font-size: 12px;
  line-height: 20px;
`;
