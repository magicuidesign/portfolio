import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Icons } from './icons';

describe('Icons', () => {
  it('renders globe icon', () => {
    render(<Icons.globe data-testid="globe-icon" />);
    expect(screen.getByTestId('globe-icon')).toBeInTheDocument();
    expect(screen.getByTestId('globe-icon').tagName).toBe('svg');
  });

  it('renders email icon', () => {
    render(<Icons.email data-testid="email-icon" />);
    expect(screen.getByTestId('email-icon')).toBeInTheDocument();
    expect(screen.getByTestId('email-icon').tagName).toBe('svg');
  });

  it('renders linkedin icon', () => {
    render(<Icons.linkedin data-testid="linkedin-icon" />);
    expect(screen.getByTestId('linkedin-icon')).toBeInTheDocument();
    expect(screen.getByTestId('linkedin-icon').tagName).toBe('svg');
    expect(screen.getByTitle('LinkedIn')).toBeInTheDocument();
  });

  it('renders x icon', () => {
    render(<Icons.x data-testid="x-icon" />);
    expect(screen.getByTestId('x-icon')).toBeInTheDocument();
    expect(screen.getByTestId('x-icon').tagName).toBe('svg');
    expect(screen.getByTitle('X')).toBeInTheDocument();
  });

  it('renders youtube icon', () => {
    render(<Icons.youtube data-testid="youtube-icon" />);
    expect(screen.getByTestId('youtube-icon')).toBeInTheDocument();
    expect(screen.getByTestId('youtube-icon').tagName).toBe('svg');
    expect(screen.getByTitle('youtube')).toBeInTheDocument();
  });

  it('renders nextjs icon', () => {
    render(<Icons.nextjs data-testid="nextjs-icon" />);
    expect(screen.getByTestId('nextjs-icon')).toBeInTheDocument();
    expect(screen.getByTestId('nextjs-icon').tagName).toBe('svg');
    expect(screen.getByTitle('Next.js')).toBeInTheDocument();
  });

  it('renders framermotion icon', () => {
    render(<Icons.framermotion data-testid="framermotion-icon" />);
    expect(screen.getByTestId('framermotion-icon')).toBeInTheDocument();
    expect(screen.getByTestId('framermotion-icon').tagName).toBe('svg');
    expect(screen.getByTitle('Framer Motion')).toBeInTheDocument();
  });

  it('renders tailwindcss icon', () => {
    render(<Icons.tailwindcss data-testid="tailwindcss-icon" />);
    expect(screen.getByTestId('tailwindcss-icon')).toBeInTheDocument();
    expect(screen.getByTestId('tailwindcss-icon').tagName).toBe('svg');
    expect(screen.getByTitle('Tailwind CSS')).toBeInTheDocument();
  });

  it('renders typescript icon', () => {
    render(<Icons.typescript data-testid="typescript-icon" />);
    expect(screen.getByTestId('typescript-icon')).toBeInTheDocument();
    expect(screen.getByTestId('typescript-icon').tagName).toBe('svg');
  });

  it('renders react icon', () => {
    render(<Icons.react data-testid="react-icon" />);
    expect(screen.getByTestId('react-icon')).toBeInTheDocument();
    expect(screen.getByTestId('react-icon').tagName).toBe('svg');
    expect(screen.getByTitle('React')).toBeInTheDocument();
  });

  it('renders github icon', () => {
    render(<Icons.github data-testid="github-icon" />);
    expect(screen.getByTestId('github-icon')).toBeInTheDocument();
    expect(screen.getByTestId('github-icon').tagName).toBe('svg');
  });

  it('renders notion icon', () => {
    render(<Icons.notion data-testid="notion-icon" />);
    expect(screen.getByTestId('notion-icon')).toBeInTheDocument();
    expect(screen.getByTestId('notion-icon').tagName).toBe('svg');
  });

  it('renders openai icon', () => {
    render(<Icons.openai data-testid="openai-icon" />);
    expect(screen.getByTestId('openai-icon')).toBeInTheDocument();
    expect(screen.getByTestId('openai-icon').tagName).toBe('svg');
  });

  it('renders googleDrive icon', () => {
    render(<Icons.googleDrive data-testid="googledrive-icon" />);
    expect(screen.getByTestId('googledrive-icon')).toBeInTheDocument();
    expect(screen.getByTestId('googledrive-icon').tagName).toBe('svg');
  });

  it('renders whatsapp icon', () => {
    render(<Icons.whatsapp data-testid="whatsapp-icon" />);
    expect(screen.getByTestId('whatsapp-icon')).toBeInTheDocument();
    expect(screen.getByTestId('whatsapp-icon').tagName).toBe('svg');
  });

  it('applies custom props to icons', () => {
    render(
      <Icons.globe 
        data-testid="globe-icon" 
        className="custom-class" 
        width={24} 
        height={24} 
      />
    );
    const icon = screen.getByTestId('globe-icon');
    expect(icon).toHaveClass('custom-class');
    expect(icon).toHaveAttribute('width', '24');
    expect(icon).toHaveAttribute('height', '24');
  });

  it('has the correct structure for each icon', () => {
    const iconNames = Object.keys(Icons);

    iconNames.forEach(iconName => {
      const iconComponent = Icons[iconName as keyof typeof Icons];

      // Test that each icon renders as an SVG
      const { container } = render(iconComponent({ 'data-testid': `${iconName}-icon` }));
      const svgElement = container.querySelector('svg');
      expect(svgElement).toBeInTheDocument();
    });
  });
});