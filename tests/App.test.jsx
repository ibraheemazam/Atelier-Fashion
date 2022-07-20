import React from 'react';
import ReactDOM from 'react-dom/client';
import { render, screen, cleanup } from "@testing-library/react";
import App from '../client/src/components/App.jsx';

// test('adds 1 + 2 to be equal 3', () => {
//   expect(1+2).toBe(3);
// });

// describe('Should render a question', () => {
//   const container = document.createElement('div');
//   document.body.appendChild(container);
//   const root = createRoot(container);
//   test('A question should render', () => {
//       root.render(
//         <GlobalContextProvider>
//           <QuestionEntry question={exampleQuestion} />
//         </GlobalContextProvider>,
//     );
//   });
// });

test("App Rendering", () => {
  render(<App/>);
});