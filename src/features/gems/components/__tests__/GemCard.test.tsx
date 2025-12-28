import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import GemCard from '../GemCard';

const mockGem = {
  id: 'ruby-001',
  name: 'Test Ruby',
  sku: 'RUBY-001',
  price: 50000,
  imageUrl: '/test-image.jpg',
  certified: true,
  inStock: true,
};

describe('GemCard', () => {
  it('displays gem information and links to detail page', () => {
    render(
      <BrowserRouter>
        <GemCard gem={mockGem} isLoading={false} onImageLoad={vi.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Ruby')).toBeInTheDocument();
    expect(screen.getByText('HK$50,000')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/gem/ruby-001');
  });

  it('shows certified badge only when gem is certified', () => {
    const { rerender } = render(
      <BrowserRouter>
        <GemCard gem={mockGem} isLoading={false} onImageLoad={vi.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByText('認證')).toBeInTheDocument();

    const uncertifiedGem = { ...mockGem, certified: false };
    rerender(
      <BrowserRouter>
        <GemCard gem={uncertifiedGem} isLoading={false} onImageLoad={vi.fn()} />
      </BrowserRouter>
    );

    expect(screen.queryByText('認證')).not.toBeInTheDocument();
  });

  it('shows out of stock badge only when gem is not in stock', () => {
    const outOfStockGem = { ...mockGem, inStock: false };
    render(
      <BrowserRouter>
        <GemCard gem={outOfStockGem} isLoading={false} onImageLoad={vi.fn()} />
      </BrowserRouter>
    );

    expect(screen.getByText('缺貨')).toBeInTheDocument();
  });

  it('calls onImageLoad callback when image loads', () => {
    const handleImageLoad = vi.fn();
    render(
      <BrowserRouter>
        <GemCard gem={mockGem} isLoading={false} onImageLoad={handleImageLoad} />
      </BrowserRouter>
    );

    const image = screen.getByAltText('Test Ruby');
    image.dispatchEvent(new Event('load'));

    expect(handleImageLoad).toHaveBeenCalledWith('ruby-001');
  });
});
