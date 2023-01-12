import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should render the app', () => {
    render(<App />);
    const header = screen.getByRole('heading', { name: 'Models App' });
    expect(header).toBeInTheDocument();
  });

  it('should render the header', () => {
    render(<App />);
    const app = screen.getByRole('heading', { name: 'Eggplant Models App' });
    expect(app).toBeInTheDocument();
  });
});
