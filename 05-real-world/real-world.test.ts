import { describe, expect, it } from 'vitest';
import {
  apiPerformanceSummary,
  averageRatingByProduct,
  countByStatus,
  commits,
  endpoints,
  inventory,
  itemsNeedingReorder,
  locByAuthor,
  metrics,
  mostCommonTransition,
  orderHistory,
  orderTotal,
  orders,
  overloadedMembers,
  reviews,
  serversWithHighErrors,
  storyPointsByStatusAndAssignee,
  tasks,
  team,
} from './real-world';

// ─── Easy ───────────────────────────────────────────────────────────────────────────

describe('EASY — order total', () => {
  it('sums qty * price for each item', () => {
    expect(orderTotal(orders[0])).toBeCloseTo(109.97, 2);
    expect(orderTotal(orders[1])).toBeCloseTo(19.99, 2);
  });
});

describe('EASY — count by status', () => {
  it('counts orders per status', () => {
    const result = countByStatus(orders);
    expect(result['delivered']).toBe(1);
    expect(result['shipped']).toBe(1);
    expect(result['pending']).toBe(1);
    expect(result['cancelled']).toBe(1);
  });
});

// ─── Medium ─────────────────────────────────────────────────────────────────

describe('MEDIUM — LOC by author', () => {
  it('sums additions + deletions per author', () => {
    const result = locByAuthor(commits);
    expect(result['alice']).toBe(195);
    expect(result['bob']).toBe(23);
    expect(result['carol']).toBe(140);
  });
});

describe('MEDIUM — average rating by product', () => {
  it('calculates mean rating per product', () => {
    const result = averageRatingByProduct(reviews);
    expect(result['p1']).toBeCloseTo(4, 0);
    expect(result['p2']).toBeCloseTo(3.5, 1);
  });
});

// ─── Hard ──────────────────────────────────────────────────────────────────────

describe('HARD — items needing reorder', () => {
  it('finds items where quantity <= reorderLevel', () => {
    const result = itemsNeedingReorder(inventory);
    expect(result).toHaveLength(1);
    expect(result[0].sku).toBe('SKU-C');
  });
});

describe('HARD — API performance summary', () => {
  it('returns total calls, avg response time, and error rate', () => {
    const result = apiPerformanceSummary(endpoints);
    expect(result.totalCalls).toBe(2000);
    expect(result.avgResponseTime).toBeCloseTo(65.8, 1);
    expect(result.errorRate).toBeCloseTo(2.5, 1);
  });
});

describe('HARD — overloaded members', () => {
  it('finds members with workload above threshold', () => {
    const result = overloadedMembers(team, 75);
    expect(result).toHaveLength(2);
    expect(result.map(m => m.name)).toContain('Alice');
    expect(result.map(m => m.name)).toContain('Carol');
  });
});

// ─── Harder ─────────────────────────────────────────────────────────────────

describe('HARDER — most common transition', () => {
  it('finds the most frequent status change', () => {
    const result = mostCommonTransition(orderHistory);
    expect(result).not.toBeNull();
    expect(result?.from).toBe('pending');
    expect(result?.to).toBe('processing');
    expect(result?.count).toBe(3);
  });
});

describe('HARDER — servers with high errors', () => {
  it('identifies servers with error rate > 1%', () => {
    const result = serversWithHighErrors(metrics);
    expect(result).toHaveLength(2);
    expect(result.every(s => s.errorRate > 1)).toBe(true);
  });
});

describe('HARDER — story points by status and assignee', () => {
  it('builds a matrix of points by assignee and status', () => {
    const result = storyPointsByStatusAndAssignee(tasks);
    expect(result['Alice']['done']).toBe(5);
    expect(result['Bob']['todo']).toBe(3);
    expect(result['Carol']['in_progress']).toBe(8);
  });
});