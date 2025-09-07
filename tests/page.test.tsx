import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

// Mock the fetch function globally for this test file
global.fetch = jest.fn(() =>
  Promise.resolve({
    text: () => Promise.resolve('Mocked API Message'),
  })
) as jest.Mock;

describe('Home Page', () => {
  it('renders the main heading', async () => {
    render(await Home());
    expect(screen.getByRole('heading', { name: /Frontend Page/i })).toBeInTheDocument();
  });

  it('displays message from API', async () => {
    render(await Home());
    expect(screen.getByText(/Message from API: Mocked API Message/i)).toBeInTheDocument();
  });
});
