import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../contexts/GlobalStore';

export default function ExtraButtons() {
  const global = React.useContext(GlobalContext);
  function onClick() {
    global.setNumQuestions(global.numQuestions + 2);
  }

  return (
    <div>
      <Button type="submit">ADD A QUESTION</Button>
      {global.numQuestions < global.questions.length ? (
        <Button type="submit" onClick={() => onClick()}>
          MORE ANSWERED QUESTIONS
        </Button>
      ) : null}
    </div>
  );
}

const Button = styled.button`
  height: 50px;
  margin-top: 10px;
  margin-left: 10px;
`;
