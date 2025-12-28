import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import ProductInfo from '../ProductInfo';

const mockGem = {
  name: 'Test Ruby',
  price: 50000,
  inStock: true,
  weight: 2.5,
  sku: 'RUBY-001',
  category: 'Ruby',
  cut: 'Round',
};

describe('ProductInfo', () => {
  it('displays correct stock status and size input based on availability', () => {
    const { rerender } = render(
      <BrowserRouter>
        <ProductInfo gem={mockGem} />
      </BrowserRouter>
    );

    // In stock scenario
    const inStockButton = screen.getByRole('button', { name: '現貨' });
    expect(inStockButton).not.toBeDisabled();
    expect(screen.getByDisplayValue('2.5 卡')).toHaveAttribute('readonly');

    // Out of stock scenario
    const outOfStockGem = { ...mockGem, inStock: false };
    rerender(
      <BrowserRouter>
        <ProductInfo gem={outOfStockGem} />
      </BrowserRouter>
    );

    const outOfStockButton = screen.getByRole('button', { name: '缺貨' });
    expect(outOfStockButton).toBeDisabled();
    expect(screen.queryByDisplayValue('2.5 卡')).not.toBeInTheDocument();
  });

  it('formats price with thousand separators', () => {
    render(
      <BrowserRouter>
        <ProductInfo gem={mockGem} />
      </BrowserRouter>
    );

    expect(screen.getByText('HK$50,000')).toBeInTheDocument();
  });
});
