import React, { useState } from 'react';
import axios from 'axios';

function CardsList() {
  let temp = [];
  axios.get('/related')
    .then((data) => {
      temp = data.data;
      console.log(temp);
    })
    .catch((error) => console.log('Error:', error));
  // const [initial, setInitial] = useState(temp);
  return (
    <div>
      {temp.map((data, index) => {
        <Card data={data} key={index} />;
      })}
    </div>
  );
}

export default CardsList;
