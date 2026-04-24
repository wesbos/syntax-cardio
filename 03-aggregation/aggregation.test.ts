import { describe, expect, it } from 'vitest';
import {
  averageWeatherByCity,
  bestValueFlights,
  commits,
  countActiveByPlan,
  countByCategory,
  flights,
  linesChangedByAuthor,
  players,
  pollResultsWithPercentages,
  revenueByRegionSorted,
  sales,
  subscriptions,
  topScorerPerTeam,
  totalRevenue,
  votes,
  weather,
  winningOptions,
} from './aggregation';

// ─── Easy ───────────────────────────────────────────────────────────────────────────

describe('EASY — count by category', () => {
  it('counts total sales per category', () => {
    const result = countByCategory(sales);
    expect(result['Electronics']).toBe(4);
    expect(result['Furniture']).toBe(2);
  });
});

describe('EASY — total revenue', () => {
  it('sums all amounts', () => {
    expect(totalRevenue(sales)).toBe(2300);
    expect(totalRevenue([])).toBe(0);
  });
});

// ─── Medium ─────────────────────────────────────────────────────────────────

describe('MEDIUM — winning options', () => {
  it('finds most voted option per poll', () => {
    const result = winningOptions(votes);
    expect(result['p1']).toBe('Option A');
    expect(result['p2']).toBe('Yes');
  });
});

describe('MEDIUM — lines changed by author', () => {
  it('sums additions + deletions per author', () => {
    const result = linesChangedByAuthor(commits);
    expect(result['alice']).toBe(105);
    expect(result['bob']).toBe(25);
  });
});

// ─── Hard ──────────────────────────────────────────────────────────────────────

describe('HARD — best value flights', () => {
  it('finds lowest price*duration / direct-preferred per route', () => {
    const result = bestValueFlights(flights);
    expect(result['NYC→LA'].flightId).toBe('F1');
    expect(result['LA→NYC'].flightId).toBe('F4');
  });
});

describe('HARD — average weather by city', () => {
  it('calculates mean temp and humidity per city', () => {
    const result = averageWeatherByCity(weather);
    expect(result['NYC'].temp).toBeCloseTo(6.5, 1);
    expect(result['LA'].humidity).toBeCloseTo(42.5, 1);
  });
});

describe('HARD — count active by plan', () => {
  it('counts only active subscriptions', () => {
    const result = countActiveByPlan(subscriptions);
    expect(result['pro']).toBe(1);
    expect(result['basic']).toBe(1);
    expect(result['enterprise']).toBe(1);
    expect(result['free']).toBe(1);
    expect(result['pro']).not.toBe(2);
  });
});

// ─── Harder ─────────────────────────────────────────────────────────────────

describe('HARDER — top scorer per team', () => {
  it('finds highest point scorer per team', () => {
    const result = topScorerPerTeam(players);
    expect(result['Lakers']).toEqual({ name: 'Alice', points: 25 });
    expect(result['Warriors']).toEqual({ name: 'Carol', points: 30 });
  });
});

describe('HARDER — revenue by region sorted', () => {
  it('returns regions sorted by revenue descending', () => {
    const result = revenueByRegionSorted(sales);
    expect(result[0].region).toBe('West');
    expect(result[0].revenue).toBe(1850);
    expect(result[1].region).toBe('East');
    expect(result[1].revenue).toBe(450);
  });
});

describe('HARDER — poll results with percentages', () => {
  it('adds percentage to each option', () => {
    const result = pollResultsWithPercentages(votes);
    expect(result['p1'][0].percentage).toBeCloseTo(43.5, 1);
    expect(result['p2'][0].percentage).toBeCloseTo(66.7, 1);
  });
});