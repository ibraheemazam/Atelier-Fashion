import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Card from './Card.jsx';

function CardsList({ productID, setProductID }) {
  const [initial, setInitial] = useState([]);
  useEffect(() => {
    axios.get('/related', { params: { productID: productID } })
      .then((data) => {
        setInitial(data.data);
        // console.log('Initial:', initial);
        // console.log('SetInitial:', data.data);
      })
      .catch((error) => console.log('Error here:', error));
  }, [productID]);
  // const [initial, setInitial] = useState(temp);
  return (
    <StyleCardList>
      {initial.map((data, index) => <Card data={data} key={index} />)}
    </StyleCardList>
  );
}

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background: #0ABAB5;
`;

export default CardsList;
