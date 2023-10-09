import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Header';
import Menu from './Menu';

test('renders learn react link', () => {
  render(<App />);
  render(<Header/>);
  render(<Menu/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
