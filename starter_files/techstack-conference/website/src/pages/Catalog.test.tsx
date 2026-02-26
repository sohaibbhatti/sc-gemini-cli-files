import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Catalog } from './Catalog';

const { mockSessions } = vi.hoisted(() => {
  return {
    mockSessions: [
      {
        id: 's1',
        title: 'React Keynote',
        description: 'Deep dive into React',
        speaker: 'Dr. Sarah Chen',
        category: 'Keynote',
        day: 'Day 1',
        time: '10:00 AM',
        location: 'Hall A',
        details: {
          fullDescription: 'Detailed React Keynote description',
          takeaways: ['React 19'],
          tracks: ['Frontend', 'React'],
          level: 'Beginner',
          speakerBio: 'Sarah bio'
        }
      },
      {
        id: 's2',
        title: 'Vue Workshop',
        description: 'Hands-on with Vue',
        speaker: 'Marcus Rodriguez',
        category: 'Learning Lab',
        day: 'Day 2',
        time: '2:00 PM',
        location: 'Room 200',
        details: {
          fullDescription: 'Detailed Vue Workshop description',
          takeaways: ['Vue 3'],
          tracks: ['Frontend', 'Vue'],
          level: 'Advanced',
          speakerBio: 'Marcus bio'
        }
      },
      {
        id: 's3',
        title: 'AI in 2026',
        description: 'Future of AI',
        speaker: 'Emily Watson',
        category: 'Breakout',
        day: 'Day 1',
        time: '11:00 AM',
        location: 'Hall B',
        details: {
          fullDescription: 'Detailed AI description',
          takeaways: ['AI Ethics'],
          tracks: ['AI', 'Future'],
          level: 'Intermediate',
          speakerBio: 'Emily bio'
        }
      }
    ]
  };
});

vi.mock('../data/sessions', () => ({
  SESSIONS: mockSessions
}));

const renderCatalog = (initialEntries = ['/catalog']) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </MemoryRouter>
  );
};

describe('Catalog Page', () => {
  it('renders all sessions initially', () => {
    renderCatalog();
    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
  });

  it('filters by search query', async () => {
    renderCatalog();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });

    expect(screen.getByText('React Keynote')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('Vue Workshop')).not.toBeInTheDocument();
    });
  });

  it('filters by Day', async () => {
    renderCatalog();
    const daySelect = screen.getByLabelText(/Day/i);
    fireEvent.change(daySelect, { target: { value: 'Day 2' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Level', async () => {
    renderCatalog();
    const levelSelect = screen.getByLabelText(/Level/i);
    fireEvent.change(levelSelect, { target: { value: 'Advanced' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Speaker', async () => {
    renderCatalog();
    const speakerSelect = screen.getByLabelText(/Speaker/i);
    fireEvent.change(speakerSelect, { target: { value: 'Emily Watson' } });

    expect(screen.getByText('AI in 2026')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('filters by Track', async () => {
    renderCatalog();
    const trackSelect = screen.getByLabelText(/Track/i);
    fireEvent.change(trackSelect, { target: { value: 'Vue' } });

    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    });
  });

  it('initializes filters from URL params', () => {
    renderCatalog(['/catalog?day=Day+2&level=Advanced']);
    
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
    expect(screen.queryByText('React Keynote')).not.toBeInTheDocument();
    
    expect(screen.getByLabelText(/Day/i)).toHaveValue('Day 2');
    expect(screen.getByLabelText(/Level/i)).toHaveValue('Advanced');
  });

  it('clears all filters when clear button is clicked', async () => {
    renderCatalog();
    const searchInput = screen.getByPlaceholderText(/Search sessions/i);
    fireEvent.change(searchInput, { target: { value: 'React' } });
    
    const clearButton = screen.getByText(/Clear all filters/i);
    fireEvent.click(clearButton);
    
    expect(searchInput).toHaveValue('');
    expect(screen.getByText('Vue Workshop')).toBeInTheDocument();
  });
});
