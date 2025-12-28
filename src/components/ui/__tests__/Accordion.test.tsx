import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Accordion from '../Accordion';

describe('Accordion', () => {
  it('toggles content visibility when clicked', async () => {
    const user = userEvent.setup();
    render(
      <Accordion title="Test Title" defaultOpen={false}>
        <div>Test Content</div>
      </Accordion>
    );

    const content = screen.getByText('Test Content');
    expect(content.parentElement?.parentElement).toHaveClass('max-h-0');

    const button = screen.getByRole('button', { name: /Test Title/i });
    await user.click(button);

    expect(content.parentElement?.parentElement).toHaveClass('max-h-[1000px]');
  });

  it('renders with different variant styles', () => {
    const { rerender } = render(
      <Accordion title="Test Title" variant="default">
        <div>Test Content</div>
      </Accordion>
    );

    expect(screen.getByText('Test Title')).toHaveClass('text-mobileTitle');

    rerender(
      <Accordion title="Test Title" variant="footer">
        <div>Test Content</div>
      </Accordion>
    );

    expect(screen.getByText('Test Title')).toHaveClass('text-secondary');
  });
});
