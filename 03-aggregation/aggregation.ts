// ─── Aggregation: 10 challenges (2 easy, 2 medium, 3 hard, 3 harder) ───

export type Sale = { id: string; product: string; category: string; amount: number; region: string; date: Date };
export type Vote = { pollId: string; option: string; votes: number; active: boolean };
export type Commit = { sha: string; author: string; files: string[]; additions: number; deletions: number; timestamp: Date };
export type Weather = { city: string; temp: number; humidity: number; condition: string; windSpeed: number };
export type Subscription = { userId: string; plan: 'free' | 'basic' | 'pro' | 'enterprise'; monthlyCost: number; startDate: Date; active: boolean };
export type Player = { id: string; name: string; team: string; position: string; points: number; assists: number };
export type Flight = { flightId: string; from: string; to: string; price: number; duration: number; stops: number; airline: string };

export const sales: Sale[] = [
  { id: 's1', product: 'Laptop', category: 'Electronics', amount: 1200, region: 'West', date: new Date('2024-01-05') },
  { id: 's2', product: 'Mouse', category: 'Electronics', amount: 25, region: 'East', date: new Date('2024-01-06') },
  { id: 's3', product: 'Desk', category: 'Furniture', amount: 450, region: 'West', date: new Date('2024-01-07') },
  { id: 's4', product: 'Monitor', category: 'Electronics', amount: 350, region: 'East', date: new Date('2024-01-08') },
  { id: 's5', product: 'Chair', category: 'Furniture', amount: 200, region: 'West', date: new Date('2024-01-09') },
  { id: 's6', product: 'Keyboard', category: 'Electronics', amount: 75, region: 'East', date: new Date('2024-01-10') },
];

export const votes: Vote[] = [
  { pollId: 'p1', option: 'Option A', votes: 150, active: true },
  { pollId: 'p1', option: 'Option B', votes: 120, active: true },
  { pollId: 'p1', option: 'Option C', votes: 80, active: true },
  { pollId: 'p2', option: 'Yes', votes: 300, active: true },
  { pollId: 'p2', option: 'No', votes: 150, active: true },
  { pollId: 'p3', option: 'Cat', votes: 200, active: false },
  { pollId: 'p3', option: 'Dog', votes: 180, active: false },
];

export const commits: Commit[] = [
  { sha: 'abc1', author: 'alice', files: ['src/a.ts', 'src/b.ts'], additions: 50, deletions: 10, timestamp: new Date('2024-01-15T10:00:00') },
  { sha: 'def2', author: 'bob', files: ['src/c.ts'], additions: 20, deletions: 5, timestamp: new Date('2024-01-15T11:00:00') },
  { sha: 'ghi3', author: 'alice', files: ['src/a.ts', 'tests/x.test.ts'], additions: 30, deletions: 15, timestamp: new Date('2024-01-15T12:00:00') },
  { sha: 'jkl4', author: 'carol', files: ['README.md'], additions: 10, deletions: 2, timestamp: new Date('2024-01-15T13:00:00') },
];

export const weather: Weather[] = [
  { city: 'NYC', temp: 5, humidity: 60, condition: 'Sunny', windSpeed: 10 },
  { city: 'NYC', temp: 8, humidity: 55, condition: 'Cloudy', windSpeed: 12 },
  { city: 'LA', temp: 22, humidity: 45, condition: 'Sunny', windSpeed: 8 },
  { city: 'LA', temp: 25, humidity: 40, condition: 'Sunny', windSpeed: 5 },
  { city: 'Seattle', temp: 12, humidity: 80, condition: 'Rainy', windSpeed: 15 },
];

export const subscriptions: Subscription[] = [
  { userId: 'u1', plan: 'pro', monthlyCost: 29, startDate: new Date('2023-06-01'), active: true },
  { userId: 'u2', plan: 'basic', monthlyCost: 9, startDate: new Date('2023-08-15'), active: true },
  { userId: 'u3', plan: 'enterprise', monthlyCost: 99, startDate: new Date('2023-01-01'), active: true },
  { userId: 'u4', plan: 'free', monthlyCost: 0, startDate: new Date('2024-01-01'), active: true },
  { userId: 'u5', plan: 'pro', monthlyCost: 29, startDate: new Date('2023-03-01'), active: false },
];

export const players: Player[] = [
  { id: 'p1', name: 'Alice', team: 'Lakers', position: 'Guard', points: 25, assists: 8 },
  { id: 'p2', name: 'Bob', team: 'Lakers', position: 'Forward', points: 18, assists: 5 },
  { id: 'p3', name: 'Carol', team: 'Warriors', position: 'Guard', points: 30, assists: 10 },
  { id: 'p4', name: 'Dave', team: 'Warriors', position: 'Center', points: 15, assists: 3 },
  { id: 'p5', name: 'Eve', team: 'Lakers', position: 'Center', points: 20, assists: 4 },
];

export const flights: Flight[] = [
  { flightId: 'F1', from: 'NYC', to: 'LA', price: 350, duration: 360, stops: 0, airline: 'Delta' },
  { flightId: 'F2', from: 'NYC', to: 'LA', price: 280, duration: 420, stops: 1, airline: 'United' },
  { flightId: 'F3', from: 'NYC', to: 'LA', price: 420, duration: 330, stops: 0, airline: 'American' },
  { flightId: 'F4', from: 'LA', to: 'NYC', price: 320, duration: 350, stops: 0, airline: 'Delta' },
  { flightId: 'F5', from: 'LA', to: 'NYC', price: 250, duration: 400, stops: 1, airline: 'United' },
];

// ─── Easy ───────────────────────────────────────────────────────────────────────────

/** EASY: Count total sales per category. */
export function countByCategory(sales: Sale[]): Record<string, number> {
  return {};
}

/** EASY: Find the total revenue (sum of all amounts). */
export function totalRevenue(sales: Sale[]): number {
  return 0;
}

// ─── Medium ─────────────────────────────────────────────────────────────────

/** MEDIUM: Find the winning option for each poll (most votes). */
export function winningOptions(votes: Vote[]): Record<string, string> {
  return {};
}

/** MEDIUM: Calculate total lines changed (additions + deletions) per author. */
export function linesChangedByAuthor(commits: Commit[]): Record<string, number> {
  return {};
}

// ─── Hard ──────────────────────────────────────────────────────────────────────

/** HARD: Find the best value flight per route (lowest price * duration ratio, direct flights preferred). */
export function bestValueFlights(flights: Flight[]): Record<string, Flight> {
  return {};
}

/** HARD: Calculate average weather stats per city. */
export function averageWeatherByCity(weather: Weather[]): Record<string, { temp: number; humidity: number }> {
  return {};
}

/** HARD: Count active subscriptions by plan. */
export function countActiveByPlan(subscriptions: Subscription[]): Record<string, number> {
  return {};
}

// ─── Harder ─────────────────────────────────────────────────────────────────

/** HARDER: Find the top scorer per team. */
export function topScorerPerTeam(players: Player[]): Record<string, { name: string; points: number }> {
  return {};
}

/** HARDER: Calculate total revenue per region, sorted by revenue descending. */
export function revenueByRegionSorted(sales: Sale[]): { region: string; revenue: number }[] {
  return [];
}

/** HARDER: Build a breakdown of poll results with percentages. */
export function pollResultsWithPercentages(votes: Vote[]): Record<string, { option: string; votes: number; percentage: number }[]> {
  return {};
}