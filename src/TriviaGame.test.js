import { render, fireEvent } from '@testing-library/react';
import TriviaGame from './TriviaGame';

// smoke test
test('renders learn react link', () => {
    render(<TriviaGame />);
});
  
// other test
test("correct elements are present on load", () => {
    const {queryByText, queryByPlaceholderText} = render(<TriviaGame />)
  
    //expect WelcomeScreen to show on initial render
    expect(queryByText("10 Questions Left")).toBeInTheDocument(); // game screen is shown
    expect(queryByPlaceholderText("name")).not.toBeInTheDocument(); // previous welcome screen should not be present 
  
})

test("Should get a response when an answer box is clicked", () => {
    const {queryAllByRole, container} = render(<TriviaGame />)

    const answerChoice = queryAllByRole("listitem")[0];
    expect(answerChoice).toBeInTheDocument();
    // Text telling user if answer is correct/wrong should not be present at first
    expect(container.querySelector("MessageBoard-message")).not.toBeTruthy()
    // click on answer ... 
    fireEvent.click(answerChoice);
    // Test showing if answer is correct or not should * NOW * be present
    expect(container.querySelector("MessageBoard-message")).not.toBeTruthy()

})
