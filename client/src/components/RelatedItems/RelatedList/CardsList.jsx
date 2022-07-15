import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useGlobalContext } from '../../../contexts/GlobalStore';
import Card from './Card';

function CardsList() {
  const {
    productID, relatedID, setRelatedID, cardIndex, setCardIndex,
  } = useGlobalContext();
  useEffect(() => {
    axios.get('/related', { params: { productID: productID } })
      .then((results) => {
        setRelatedID(results.data);
        // console.log('related:', relatedID);
      })
      .catch((error) => console.log('Error here:', error));
  }, [productID, cardIndex]);
  // const [initial, setInitial] = useState(temp);
  // console.log('related:', relatedID);
  function clickRight() {
    console.log(relatedID.length);
    if (cardIndex + 4 < relatedID.length) {
      setCardIndex(cardIndex + 1);
      console.log('CardIndex Right:', cardIndex);
    }
  }
  function clickLeft() {
    if (cardIndex > 0) {
      setCardIndex(cardIndex - 1);
      console.log('CardIndex Left:', cardIndex);
    }
  }
  const list = [...relatedID].slice(cardIndex, cardIndex + 4);
  console.log('List:', list);
  return (
    <div>
      <LeftButton onClick={() => clickLeft()}> &lt; </LeftButton>
      <StyleCardList>
        {console.log('Check List:', list)}
        {list.map((data, i) => <Card data={data} key={i} />)}
      </StyleCardList>
      <RightButton onClick={() => clickRight()}> &gt; </RightButton>
    </div>
  );
}

const StyleCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: #0ABAB5;
`;

const LeftButton = styled.button`
  display: block;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  font-width: bold;
  font-size: 30px;
  background: #0ABAB5;
  background-color: transparent;
  border: none;
  &:hover {
    opacity: 0.60;
  }
`;

const RightButton = styled.button`
display: block;
position: absolute;
text-align: right;
font-width: bold;
font-size: 30px;
background: #0ABAB5;
background-color: transparent;
border: none;
&:hover {
  opacity: 0.60;
}
`;

export default CardsList;
