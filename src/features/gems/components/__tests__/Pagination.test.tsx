import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import Pagination from '../Pagination';

describe('Pagination', () => {
  it('does not render when totalPages is 1 or less', () => {
    const { container } = render(
      <Pagination currentPage={1} totalPages={1} onPageChange={vi.fn()} />
    );

    expect(container.firstChild).toBeNull();
  });

  it('disables buttons correctly based on current page', () => {
    const { rerender } = render(
      <Pagination currentPage={1} totalPages={5} onPageChange={vi.fn()} />
    );

    expect(screen.getByRole('button', { name: '上一頁' })).toBeDisabled();
    expect(screen.getByRole('button', { name: '下一頁' })).not.toBeDisabled();

    rerender(<Pagination currentPage={5} totalPages={5} onPageChange={vi.fn()} />);

    expect(screen.getByRole('button', { name: '上一頁' })).not.toBeDisabled();
    expect(screen.getByRole('button', { name: '下一頁' })).toBeDisabled();
  });

  it('calls onPageChange with correct direction when buttons are clicked', async () => {
    const user = userEvent.setup();
    const handlePageChange = vi.fn();
    render(<Pagination currentPage={2} totalPages={5} onPageChange={handlePageChange} />);

    await user.click(screen.getByRole('button', { name: '上一頁' }));
    expect(handlePageChange).toHaveBeenCalledWith('prev');

    await user.click(screen.getByRole('button', { name: '下一頁' }));
    expect(handlePageChange).toHaveBeenCalledWith('next');
  });
});
