import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Card from './Card';

function CardsList() {
  const {
    productID, relatedID, setRelatedID,
  } = useGlobalContext();
  useEffect(() => {
    axios.get('/related', { params: { productID: productID } })
      .then((results) => {
        setRelatedID(results.data);
        // console.log('related:', relatedID);
      })
      .catch((error) => console.log('Error here:', error));
  }, [productID]);
  // const [initial, setInitial] = useState(temp);
  // console.log('related:', relatedID);
  return (
    <StyleCardList>
      {relatedID.map((data, index) => <Card data={data} key={index} />)}
    </StyleCardList>
  );
}

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #0ABAB5;
`;

export default CardsList;
