import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Socials } from './Socials';

describe('Socials Page', () => {
  it('renders correctly', () => {
    render(
      <MemoryRouter>
        <Socials />
      </MemoryRouter>
    );

    expect(screen.getByText('Social Kit')).toBeInTheDocument();
    expect(screen.getByText('#TechStack2026')).toBeInTheDocument();
    expect(screen.getByText('Color Palette')).toBeInTheDocument();
    expect(screen.getByText('Brand Assets')).toBeInTheDocument();
  });

  it('displays the brand colors', () => {
    render(
      <MemoryRouter>
        <Socials />
      </MemoryRouter>
    );

    expect(screen.getByText('#6366f1')).toBeInTheDocument(); // Indigo 500
    expect(screen.getByText('#fb7185')).toBeInTheDocument(); // Rose 400
  });
});
