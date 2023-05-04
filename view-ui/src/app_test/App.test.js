import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('App component', () => {
  test('renders the Login page on the /login route', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  test('renders the Netflix page on the / route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });

  test('renders the Login page on the /signup route', () => {
    render(
      <MemoryRouter initialEntries={['/signup']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('Signup')).toBeInTheDocument();
  });

  test('renders the Netflix page on the /tv route', () => {
    render(
      <MemoryRouter initialEntries={['/tv']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('TV Series')).toBeInTheDocument();
  });  
});
