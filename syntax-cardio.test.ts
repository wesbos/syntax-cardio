import { describe, expect, it } from 'vitest';
import {
  chunk,
  findNameById,
  groupStatesByPopulation,
  invertedIndex,
  lowercaseHello,
  partition,
  runningTotal,
  sortTitlesIgnoringArticles,
  sum,
  topNPerSubject,
  unique,
  type City,
  type DocWords,
  type ScoreRow,
  type User,
} from './syntax-cardio';

// ─── Easy ───

describe("A passed Test", () => {
  it("should pass", () => {
    expect(1).toBe(1);
  });
});

describe('lowercaseHello', () => {
  it('returns lowercase hello', () => {
    expect(lowercaseHello('John')).toBe('hello john');
    expect(lowercaseHello('JOHN')).toBe('hello john');
    expect(lowercaseHello('')).toBe('hello');
  });
});


describe('easy — sum', () => {
  it('sums numbers', () => {
    expect(sum([])).toBe(0);
    expect(sum([7])).toBe(7);
    expect(sum([1, 2, 3, 4])).toBe(10);
    expect(sum([-1, 0.5, 2.5])).toBe(2);
  });
});

describe('easy — unique (first occurrence order)', () => {
  it('dedupes primitives and preserves order', () => {
    expect(unique([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
    expect(unique(['a', 'b', 'a'])).toEqual(['a', 'b']);
    expect(unique([])).toEqual([]);
  });
});

describe('partition', () => {
  it('splits into pass / fail buckets', () => {
    expect(partition([1, -2, 3, -4], (n) => n > 0)).toEqual({ pass: [1, 3], fail: [-2, -4] });
    expect(partition([], () => true)).toEqual({ pass: [], fail: [] });
  });
});

describe('find name by id', () => {
  it('returns name or null', () => {
    const users: User[] = [
      { id: 'a', name: 'Ada' },
      { id: 'b', name: 'Bob' },
    ];
    expect(findNameById(users, 'b')).toBe('Bob');
    expect(findNameById(users, 'a')).toBe('Ada');
    expect(findNameById(users, 'z')).toBe(null);
    expect(findNameById([], 'a')).toBe(null);
  });
});

// ─── Medium ───

describe('medium — sort titles without articles', () => {
  it('sorts as if The / A / An were stripped for comparison', () => {
    const input = [
      'The Matrix',
      'A Beautiful Mind',
      'Goodfellas',
      'An Education',
      'The Social Network',
      'An Elephant Sitting Still',
      'A Pigeon Sat on a Branch Reflecting on Existence',
      'The Angels Share',
    ];
    const inputBeforeSort = [...input]
    expect(sortTitlesIgnoringArticles([...input])).toEqual([
      'The Angels Share',
      'A Beautiful Mind',
      'An Education',
      'An Elephant Sitting Still',
      'Goodfellas',
      'The Matrix',
      'A Pigeon Sat on a Branch Reflecting on Existence',
      'The Social Network',
    ]);
    expect(input).toEqual(inputBeforeSort);
  });

  it('sorts as if only the prefix articles are stripped', () => {
    const input = [
      'The the A',
      'The B',
    ];
    const inputBeforeSort = [...input]
    expect(sortTitlesIgnoringArticles([...input])).toEqual([
      'The B',
      'The the A',
    ]);
    expect(input).toEqual(inputBeforeSort);
  });
});

describe('medium — chunk', () => {
  it('splits into consecutive chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
    expect(chunk([1, 2, 3, 4], 3)).toEqual([[1, 2, 3], [4]]);
    expect(chunk([], 3)).toEqual([]);
    expect(chunk(['a'], 5)).toEqual([['a']]);
  });
});

// ─── Harder ───

describe('harder — running total', () => {
  it('returns cumulative sums', () => {
    expect(runningTotal([])).toEqual([]);
    expect(runningTotal([5])).toEqual([5]);
    expect(runningTotal([1, -2, 3])).toEqual([1, -1, 2]);
    expect(runningTotal([10, 0, 0, 7])).toEqual([10, 10, 10, 17]);
  });
});

describe('harder — top N per subject', () => {
  it('keeps top scores per subject, highest first; stable within ties by input order', () => {
    const rows: ScoreRow[] = [
      { studentId: 'a', subject: 'math', score: 90 },
      { studentId: 'b', subject: 'math', score: 85 },
      { studentId: 'c', subject: 'math', score: 70 },
      { studentId: 'd', subject: 'english', score: 88 },
      { studentId: 'e', subject: 'english', score: 92 },
    ];
    expect(topNPerSubject(rows, 2)).toEqual({
      math: [
        { studentId: 'a', score: 90 },
        { studentId: 'b', score: 85 },
      ],
      english: [
        { studentId: 'e', score: 92 },
        { studentId: 'd', score: 88 },
      ],
    });
  });

  it('returns fewer than n when a subject has fewer rows', () => {
    const rows: ScoreRow[] = [{ studentId: 'x', subject: 'art', score: 40 }];
    expect(topNPerSubject(rows, 3)).toEqual({
      art: [{ studentId: 'x', score: 40 }],
    });
  });
});

// ─── Hard ───

describe('hard — inverted index', () => {
  it('maps each word to sorted document ids', () => {
    const docs: DocWords[] = [
      { id: 'doc2', words: ['cat', 'bird'] },
      { id: 'doc1', words: ['cat', 'dog'] },
    ];
    expect(invertedIndex(docs)).toEqual({
      bird: ['doc2'],
      cat: ['doc1', 'doc2'],
      dog: ['doc1'],
    });
  });
});

describe('hard — group states by total population', () => {
  it('orders states by total population desc; city names A→Z within each state', () => {
    const cities: City[] = [
      { name: 'Dallas', state: 'TX', population: 200 },
      { name: 'Austin', state: 'TX', population: 100 },
      { name: 'LA', state: 'CA', population: 300 },
      { name: 'SF', state: 'CA', population: 50 },
    ];
    const input = [...cities];
    expect(groupStatesByPopulation(input)).toEqual([
      { state: 'CA', totalPopulation: 350, cities: ['LA', 'SF'] },
      { state: 'TX', totalPopulation: 300, cities: ['Austin', 'Dallas'] },
    ]);
    expect(input).toEqual(cities);
  });
});

// order population
// group by state
// order by state