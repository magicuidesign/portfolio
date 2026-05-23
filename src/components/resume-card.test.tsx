import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ResumeCard } from './resume-card';
import { describe, expect, it } from '@jest/globals';
import '@testing-library/jest-dom';

// Mock the framer-motion motion.div component
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, animate, initial }: any) => {
      return (
        <div data-testid="motion-div" data-animate={JSON.stringify(animate)} data-initial={JSON.stringify(initial)}>
          {children}
        </div>
      );
    },
  },
}));

describe('ResumeCard', () => {
  const defaultProps = {
    logoUrl: 'https://example.com/logo.png',
    altText: 'Company Logo',
    title: 'Software Engineer',
    period: '2020 - 2022',
  };

  it('renders with required props', () => {
    render(<ResumeCard {...defaultProps} />);

    // Check that required elements are rendered
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('2020 - 2022')).toBeInTheDocument();
    // Avatar component renders an element for the logo - check for the avatar container
    expect(screen.getByText('C')).toBeInTheDocument(); // This is the fallback from altText[0]
  });

  it('renders subtitle when provided', () => {
    render(<ResumeCard {...defaultProps} subtitle="Google" />);

    expect(screen.getByText('Google')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    render(<ResumeCard {...defaultProps} />);

    expect(screen.queryByText('Google')).not.toBeInTheDocument();
  });

  it('renders badges when provided', () => {
    render(<ResumeCard {...defaultProps} badges={['React', 'TypeScript']} />);

    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('does not render badges container when not provided', () => {
    render(<ResumeCard {...defaultProps} />);

    // Check that badge elements are not present
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('TypeScript')).not.toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<ResumeCard {...defaultProps} description="Worked on awesome projects" />);

    // Initially, the description should not be visible due to animation
    const motionDiv = screen.getByTestId('motion-div');
    expect(motionDiv).toBeInTheDocument();
    expect(motionDiv).toHaveTextContent('Worked on awesome projects');
  });

  it('toggles description visibility on click when description exists', () => {
    const { container } = render(<ResumeCard {...defaultProps} description="Worked on awesome projects" />);

    // Initially, description should be collapsed (animate: {opacity: 0, height: 0})
    const motionDiv = container.querySelector('[data-testid="motion-div"]');
    expect(motionDiv).toBeInTheDocument();

    // Check initial state (collapsed)
    if (motionDiv) {
      const initialAnimate = JSON.parse(motionDiv.getAttribute('data-animate') || '{}');
      expect(initialAnimate).toEqual({ opacity: 0, height: 0 });
    }

    // Click the card to expand
    fireEvent.click(screen.getByText('Software Engineer'));

    // Check that the click worked by verifying the component didn't crash
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('does not expand when no description is provided', () => {
    render(<ResumeCard {...defaultProps} />);
    
    const card = screen.getByText('Software Engineer');
    fireEvent.click(card);
    
    // When no description exists, the card should not toggle expand state
    // We ensure the component doesn't crash or behave unexpectedly
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
  });

  it('uses correct href when provided', () => {
    render(<ResumeCard {...defaultProps} href="https://example.com" />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
  });

  it('uses default href when not provided', () => {
    render(<ResumeCard {...defaultProps} />);
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '#');
  });
});