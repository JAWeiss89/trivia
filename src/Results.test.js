import { render } from '@testing-library/react';
import Results from './Results';

// smoke test
test('renders learn react link', () => {
    render(<Results />);
});
  
// snapshot test
test("matches snapshot", () => {
const { asFragment } = render( <Results />);
expect(asFragment()).toMatchSnapshot();
});

test("screen shows with name", () => {
    const {queryByText} = render(<Results name="bob" score={12}/>);

    expect(queryByText("game over")).toBeInTheDocument();
    expect(queryByText("bob")).toBeInTheDocument();
})
  