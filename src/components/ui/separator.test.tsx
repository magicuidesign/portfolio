import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Separator } from './separator';

describe('Separator', () => {
  it('renders a horizontal separator by default', () => {
    render(<Separator />);

    const separator = screen.getByRole('none');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('h-[1px] w-full');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('renders a vertical separator when orientation is vertical', () => {
    render(<Separator orientation="vertical" />);

    const separator = screen.getByRole('none');
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass('h-full w-[1px]');
    expect(separator).toHaveAttribute('data-orientation', 'vertical');
  });

  it('applies custom className', () => {
    render(<Separator className="custom-class" />);

    const separator = screen.getByRole('none');
    expect(separator).toHaveClass('custom-class');
  });

  it('has correct default props', () => {
    render(<Separator />);

    const separator = screen.getByRole('none');
    expect(separator).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('applies custom decorative prop', () => {
    render(<Separator decorative={false} />);

    const separator = screen.getByRole('separator');
    // When decorative is false, the component renders with separator role
    // rather than none role, which is the main behavior we can test
  });

  it('forwards ref properly', () => {
    const ref = React.createRef<HTMLHRElement>();
    render(<Separator ref={ref} />);

    // Check that the ref was assigned to an element
    expect(ref.current).not.toBeNull();
  });

  it('accepts additional props', () => {
    render(<Separator data-testid="test-separator" />);

    expect(screen.getByTestId('test-separator')).toBeInTheDocument();
  });
});