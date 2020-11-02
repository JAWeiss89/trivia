import { render, fireEvent } from '@testing-library/react';
import App from './App';

// smoke test
test('renders learn react link', () => {
  render(<App />);
});

// snapshot test
test("matches snapshot", () => {
  const { asFragment } = render( <App />);
  expect(asFragment()).toMatchSnapshot();
});

// other tests
test("correct elements are present on load", () => {
  const {queryByText, queryByPlaceholderText} = render(<App />)

  //expect WelcomeScreen to show on initial render
  expect(queryByText("trivia")).toBeInTheDocument();
  expect(queryByPlaceholderText("name")).toBeInTheDocument();

})
test("submits form and goes to game screen", () => {
  const {queryByText, queryByPlaceholderText} = render(<App />)


  //fill name field and submit
  const nameField = queryByPlaceholderText("name");
  const startBtn = queryByText("start");
  fireEvent.change(nameField, { target: { value: 'jorge' } })
  fireEvent.click(startBtn);

  expect(queryByText("Score: 0")).toBeInTheDocument();
})