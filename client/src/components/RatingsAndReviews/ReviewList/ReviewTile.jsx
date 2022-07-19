import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import HelpfulReport from './HelpfulReport';

function ReviewTile({ review }) {
  const starCount = [];

  for (let i = 0; i < review.rating; i += 1) {
    starCount.push(i);
  }

  return (
    <Container>
      <br />
      <StarsDateName>
        <div>
          Star count:
          {review.rating}
        </div>
        {/* {starCount.map((star) => (
          <RevDiv key={star} />
        ))}
        <br /> */}
        <DateName>
          <div>
            {`${review.reviewer_name},`}
            &nbsp;
          </div>
          <div>
            {format(parseISO(review.date), 'MMMM dd, yyyy')}
          </div>
        </DateName>
      </StarsDateName>
      <Summary>{review.summary}</Summary>
      {/* need to add word break truncation to summary */}
      <div>
        {review.body}
        {/* need to add conditional formatting for past 250 words */}
      </div>
      <br />
      {review.recommend
      && <div> &#10003; I recommend this product</div>}
      <br />

      <PhotosDiv>
        {review.photos.map((photo) => (
          <RevImg alt="" src={photo.url} />
        ))}
      </PhotosDiv>
      <br />

      {review.response
        && (
        <div>
          <Response>
            <h4>Response:</h4>
            <br />
            <div>{review.response}</div>
          </Response>
          <br />
        </div>
        )}

      <HelpfulReport review={review} />
      <br />
    </Container>
  );
}

ReviewTile.propTypes = {
  review: PropTypes.shape({
    body: PropTypes.string,
    summary: PropTypes.string,
    recommend: PropTypes.bool,
    rating: PropTypes.number,
    reviewer_name: PropTypes.string,
    date: PropTypes.string,
    response: PropTypes.string,
  }).isRequired,
};

export default ReviewTile;

const Container = styled.div`
  border-bottom: 1px solid;
`;

const StarsDateName = styled.div`
  display: flex;
  justify-content: space-between;
  background: ;
`;

const DateName = styled.div`
  display: flex;
  justify-content: flex-end;
  background: ;
`;

const Response = styled.div`
  padding: 1em;
  background: lightgrey;
`;

const PhotosDiv = styled.div`
  display: flex;

`;

const RevImg = styled.img`
  height: 100px;
  width: 100px;
  padding: .5em;
`;

const Summary = styled.h3`
  display: flex;
  background: ;
`;

// const RevDiv = styled.div`
//   margin: 50px 0;
//   position: relative;
//   display: block;
//   color: red;
//   width: 0px;
//   height: 0px;
//   border-right: 100px solid transparent;
//   border-bottom: 70px solid red;
//   border-left: 100px solid transparent;
//   transform: rotate(35deg);
//   &:before {
//     border-bottom: 80px solid red;
//     border-left: 30px solid transparent;
//     border-right: 30px solid transparent;
//     position: absolute;
//     height: 0;
//     width: 0;
//     top: -45px;
//     left: -65px;
//     display: block;
//     content: '';
//     transform: rotate(-35deg);
//   };
//   &:after {
//     position: absolute;
//     display: block;
//     color: red;
//     top: 3px;
//     left: -105px;
//     width: 0px;
//     height: 0px;
//     border-right: 100px solid transparent;
//     border-bottom: 70px solid red;
//     border-left: 100px solid transparent;
//     transform: rotate(-70deg);
//     content: '';
//   };
// `;
