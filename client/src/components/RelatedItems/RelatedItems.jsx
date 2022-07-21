import React from 'react';
import styled from 'styled-components';
import CardsList from './RelatedList/CardsList';
import OutfitList from './OutfitList/OutfitList';

function RelatedItems() {
  return (
    <div id="related-items">
      <Text>
        Related Items
      </Text>
      <CardsList />
      <Text>
        Outfit List
      </Text>
      <OutfitList />
    </div>
  );
}

const Text = styled.div`
  font-size: large;
  font-weight: bold;
  text-align: center;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.tertiaryColor};
`;

export default RelatedItems;
