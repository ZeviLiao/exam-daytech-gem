import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import GemListPage from '../GemListPage';

describe('GemListPage', () => {
  it('renders the gem list page', () => {
    render(
      <BrowserRouter>
        <GemListPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Premium Gemstone Collection')).toBeInTheDocument();
    expect(screen.getByText(/Explore the world's finest gemstones/i)).toBeInTheDocument();
  });

  it('displays category filter buttons', () => {
    render(
      <BrowserRouter>
        <GemListPage />
      </BrowserRouter>
    );

    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ruby' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sapphire' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Emerald' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Diamond' })).toBeInTheDocument();
  });

  it('displays gem cards', () => {
    render(
      <BrowserRouter>
        <GemListPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Burmese Ruby')).toBeInTheDocument();
    expect(screen.getByText('Kashmir Blue Sapphire')).toBeInTheDocument();
    expect(screen.getByText('Colombian Emerald')).toBeInTheDocument();
  });
});
