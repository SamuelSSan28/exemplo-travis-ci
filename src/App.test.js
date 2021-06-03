import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Learning about CI and CD with Travis CI/i);
  expect(linkElement).toBeInTheDocument();
});
