import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home';

describe('Home Component', () => {
  test('renders the initial welcome message', () => {
    render(<Home />);
    const welcomeMessageElement = screen.getByText(/Welcome to our React app!/i);
    expect(welcomeMessageElement).toBeInTheDocument();
  });

  test('updates the message on button click', () => {
    render(<Home />);
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(buttonElement);
    const updatedMessageElement = screen.getByText(/Thanks for clicking!/i);
    expect(updatedMessageElement).toBeInTheDocument();
  });
});
