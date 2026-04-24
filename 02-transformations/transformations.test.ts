import { describe, expect, it } from 'vitest';
import {
  buildEmployeeLookup,
  configOptions,
  coordinates,
  coordinatesToStrings,
  editableKeys,
  employees,
  extractAllTags,
  extractInfoLogs,
  flattenNodeChain,
  formatEmployees,
  logs,
  movies,
  nodes,
  pivotByGenre,
  tasks,
  tasksWithStatus,
  titlesUppercase,
} from './transformations';

// ─── Easy ───────────────────────────────────────────────────────────────────────────

describe('EASY — titles uppercase', () => {
  it('converts movie titles to uppercase', () => {
    expect(titlesUppercase(movies.slice(0, 2))).toEqual(['THE MATRIX', 'INCEPTION']);
    expect(titlesUppercase([])).toEqual([]);
  });
});

describe('EASY — format employees', () => {
  it('formats as "FirstName LastName — Title"', () => {
    expect(formatEmployees(employees.slice(0, 2))).toEqual([
      'Alice Chen — Engineer',
      'Bob Smith — Designer',
    ]);
  });
});

// ─── Medium ─────────────────────────────────────────────────────────────────

describe('MEDIUM — coordinates to strings', () => {
  it('converts to "[lat, lng]" strings', () => {
    expect(coordinatesToStrings(coordinates.slice(0, 2))).toEqual([
      '[40.7128, -74.006]',
      '[34.0522, -118.2437]',
    ]);
  });
});

describe('MEDIUM — extract all tags', () => {
  it('collects unique tags from tasks', () => {
    const tags = extractAllTags(tasks);
    expect(tags.sort()).toEqual(['docs', 'frontend', 'maintenance', 'feature', 'urgent']);
  });
});

// ─── Hard ──────────────────────────────────────────────────────────────────────

describe('HARD — extract info logs', () => {
  it('returns DEBUG/INFO logs formatted as "HH:MM | SERVICE | message"', () => {
    const result = extractInfoLogs(logs);
    expect(result).toContain('10:00 | api | Server started');
    expect(result).toContain('10:15 | cache | Cache miss');
    expect(result).not.toContain('Slow query');
    expect(result).not.toContain('Connection timeout');
  });
});

describe('HARD — tasks with status', () => {
  it('formats each task with DONE or PENDING', () => {
    const result = tasksWithStatus(tasks);
    expect(result).toContain('Fix login bug: [DONE]');
    expect(result).toContain('Write docs: [PENDING]');
  });
});

describe('HARD — editable keys', () => {
  it('extracts editable keys from nested config arrays', () => {
    const configs = [[configOptions[0], configOptions[1]], [configOptions[2]]];
    expect(editableKeys(configs)).toEqual(['theme', 'language']);
  });
});

// ─── Harder ─────────────────────────────────────────────────────────────────────────

describe('HARDER — flatten node chain', () => {
  it('follows the chain and collects values', () => {
    expect(flattenNodeChain(nodes, 'n1')).toEqual([10, 20, 30]);
    expect(flattenNodeChain(nodes, 'n2')).toEqual([20, 30]);
  });
});

describe('HARDER — build employee lookup', () => {
  it('maps ID to name and tenure', () => {
    const lookup = buildEmployeeLookup(employees);
    expect(lookup['e1']).toEqual({ name: 'Alice Chen', tenure: 4 });
    expect(lookup['e4']).toEqual({ name: 'Dave Lee', tenure: 6 });
  });
});

describe('HARDER — pivot by genre', () => {
  it('groups movie titles by genre, sorted', () => {
    const result = pivotByGenre(movies);
    expect(result['Sci-Fi'].sort()).toEqual(['Inception', 'Interstellar', 'The Matrix']);
    expect(result['Action'].sort()).toEqual(['Inception', 'Interstellar', 'The Dark Knight', 'The Matrix']);
  });
});