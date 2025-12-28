import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';
import PromotionBanner from '../PromotionBanner';

describe('PromotionBanner', () => {
  it('renders banner with link to sale page', () => {
    render(
      <BrowserRouter>
        <PromotionBanner />
      </BrowserRouter>
    );

    expect(screen.getByText('精選優惠')).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/sale');
  });
});
