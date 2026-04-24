import { describe, expect, it } from 'vitest';
import {
  averageBySensor,
  averageGPA,
  calculateOrderTotal,
  countEventAttendanceStatus,
  countInStock,
  events,
  getUniqueSensorIds,
  median,
  mode,
  netBalance,
  orders,
  products,
  readings,
  students,
  transactions,
  uniqueStrings,
} from './fundamentals';

// ─── Easy ───────────────────────────────────────────────────────────────────────────

describe('EASY — count in stock', () => {
  it('counts available products', () => {
    expect(countInStock(products)).toBe(3);
    expect(countInStock([])).toBe(0);
  });
});

describe('EASY — calculate order total', () => {
  it('sums qty * unitPrice - discount', () => {
    expect(calculateOrderTotal(orders)).toBeCloseTo(63, 0);
    expect(calculateOrderTotal([])).toBe(0);
  });
});

// ─── Medium ─────────────────────────────────────────────────────────────────

describe('MEDIUM — median', () => {
  it('finds the middle value', () => {
    expect(median([1, 2, 3])).toBe(2);
    expect(median([1, 2, 3, 4])).toBe(2.5);
    expect(median([5])).toBe(5);
    expect(median([])).toBe(0);
  });
});

describe('MEDIUM — unique strings', () => {
  it('removes duplicates, preserves order', () => {
    expect(uniqueStrings(['a', 'b', 'a', 'c', 'b'])).toEqual(['a', 'b', 'c']);
    expect(uniqueStrings([])).toEqual([]);
  });
});

// ─── Hard ──────────────────────────────────────────────────────────────────────

describe('HARD — unique sensor IDs', () => {
  it('extracts sensor IDs, sorted alphabetically', () => {
    expect(getUniqueSensorIds(readings)).toEqual(['humid-1', 'temp-1', 'temp-2']);
  });
});

describe('HARD — average by sensor', () => {
  it('calculates mean value per sensor, rounded to 1 decimal', () => {
    const result = averageBySensor(readings);
    expect(result['temp-1']).toBeCloseTo(22.8, 1);
    expect(result['humid-1']).toBeCloseTo(63.5, 1);
  });
});

describe('HARD — event attendance status', () => {
  it('counts full / under capacity / over capacity', () => {
    const result = countEventAttendanceStatus(events);
    expect(result['at capacity']).toBe(0);
    expect(result['under capacity']).toBe(3);
    expect(result['over capacity']).toBe(1);
  });
});

// ─── Harder ─────────────────────────────────────────────────────────────────

describe('HARDER — net balance', () => {
  it('credits minus debits', () => {
    expect(netBalance(transactions)).toBe(1746);
  });
});

describe('HARDER — mode', () => {
  it('returns most frequent value', () => {
    expect(mode([1, 2, 2, 3, 3, 3])).toBe(3);
    expect(mode([1, 1, 2, 2])).toBe(1);
    expect(mode([])).toBeNull();
  });
});

describe('HARDER — average GPA per student', () => {
  it('calculates mean grades per student, rounded to 1 decimal', () => {
    const result = averageGPA(students.filter(s => s.enrolled));
    expect(result['Alice']).toBeCloseTo(88.8, 1);
    expect(result['Bob']).toBeCloseTo(80.0, 1);
  });
});