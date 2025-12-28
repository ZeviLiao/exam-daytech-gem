import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductDataTable from '../ProductDataTable';

describe('ProductDataTable', () => {
  it('displays all product data with correct formatting', () => {
    render(<ProductDataTable sku="SAPPHIRE-002" category="Sapphire" weight={3.8} cut="Oval" />);

    expect(screen.getByText('SAPPHIRE-002')).toBeInTheDocument();
    expect(screen.getByText('Sapphire')).toBeInTheDocument();
    expect(screen.getByText('3.8卡')).toBeInTheDocument();
    expect(screen.getByText('Oval')).toBeInTheDocument();
  });
});
