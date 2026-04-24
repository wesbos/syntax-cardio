// ─── Fundamentals: 10 challenges (2 easy, 2 medium, 3 hard, 3 harder) ───

export type Product = { id: string; name: string; price: number; inStock: boolean; tags: string[] };
export type OrderLine = { sku: string; qty: number; unitPrice: number; discount: number };
export type Reading = { sensorId: string; value: number; timestamp: Date; unit: string };
export type Event = { id: string; name: string; location: string; attendees: string[]; capacity: number };
export type Recipe = { name: string; ingredients: string[]; calories: number; prepTime: number; rating: number };
export type Transaction = { id: string; type: 'credit' | 'debit'; amount: number; category: string; date: Date };
export type Student = { id: string; name: string; grades: number[]; enrolled: boolean };

export const products: Product[] = [
  { id: 'p1', name: 'Wireless Mouse', price: 29.99, inStock: true, tags: ['electronics', 'peripheral'] },
  { id: 'p2', name: 'USB Cable', price: 12.99, inStock: false, tags: ['electronics', 'cable'] },
  { id: 'p3', name: 'Mechanical Keyboard', price: 89.99, inStock: true, tags: ['electronics', 'peripheral'] },
  { id: 'p4', name: 'Monitor Stand', price: 45.00, inStock: true, tags: ['accessories', 'desk'] },
  { id: 'p5', name: 'Webcam HD', price: 79.99, inStock: false, tags: ['electronics', 'peripheral'] },
];

export const orders: OrderLine[] = [
  { sku: 'A001', qty: 2, unitPrice: 10, discount: 0 },
  { sku: 'B002', qty: 1, unitPrice: 25, discount: 5 },
  { sku: 'C003', qty: 5, unitPrice: 5, discount: 2 },
  { sku: 'A001', qty: 1, unitPrice: 10, discount: 0 },
  { sku: 'D004', qty: 3, unitPrice: 15, discount: 3 },
];

export const readings: Reading[] = [
  { sensorId: 'temp-1', value: 22.5, timestamp: new Date('2024-01-15T10:00:00'), unit: '°C' },
  { sensorId: 'temp-2', value: 23.1, timestamp: new Date('2024-01-15T10:05:00'), unit: '°C' },
  { sensorId: 'humid-1', value: 65, timestamp: new Date('2024-01-15T10:00:00'), unit: '%' },
  { sensorId: 'temp-1', value: 23.0, timestamp: new Date('2024-01-15T10:10:00'), unit: '°C' },
  { sensorId: 'humid-1', value: 62, timestamp: new Date('2024-01-15T10:05:00'), unit: '%' },
];

export const events: Event[] = [
  { id: 'e1', name: 'Tech Conference', location: 'San Francisco', attendees: ['Alice', 'Bob', 'Carol'], capacity: 100 },
  { id: 'e2', name: 'Music Festival', location: 'Austin', attendees: ['Dan', 'Eve'], capacity: 50 },
  { id: 'e3', name: 'Startup Pitch', location: 'New York', attendees: ['Frank', 'Grace', 'Hank', 'Ivy'], capacity: 20 },
  { id: 'e4', name: 'Hackathon', location: 'San Francisco', attendees: ['Jack', 'Kate'], capacity: 200 },
];

export const recipes: Recipe[] = [
  { name: 'Caesar Salad', ingredients: ['romaine', 'parmesan', 'croutons', 'dressing'], calories: 350, prepTime: 15, rating: 4.2 },
  { name: 'Grilled Salmon', ingredients: ['salmon', 'lemon', 'herbs', 'olive oil'], calories: 450, prepTime: 25, rating: 4.8 },
  { name: 'Veggie Stir Fry', ingredients: ['tofu', 'bell peppers', 'broccoli', 'soy sauce'], calories: 280, prepTime: 20, rating: 4.0 },
  { name: 'Beef Tacos', ingredients: ['beef', 'tortilla', 'cheese', 'salsa'], calories: 520, prepTime: 30, rating: 4.5 },
];

export const transactions: Transaction[] = [
  { id: 't1', type: 'credit', amount: 1500, category: 'salary', date: new Date('2024-01-01') },
  { id: 't2', type: 'debit', amount: 120, category: 'groceries', date: new Date('2024-01-03') },
  { id: 't3', type: 'debit', amount: 45, category: 'entertainment', date: new Date('2024-01-05') },
  { id: 't4', type: 'credit', amount: 200, category: 'freelance', date: new Date('2024-01-10') },
  { id: 't5', type: 'debit', amount: 89, category: 'utilities', date: new Date('2024-01-15') },
  { id: 't6', type: 'debit', amount: 200, category: 'groceries', date: new Date('2024-01-20') },
];

export const students: Student[] = [
  { id: 's1', name: 'Alice', grades: [85, 90, 92, 88], enrolled: true },
  { id: 's2', name: 'Bob', grades: [78, 82, 80], enrolled: true },
  { id: 's3', name: 'Carol', grades: [95, 98, 97, 99, 96], enrolled: false },
  { id: 's4', name: 'Dave', grades: [72, 75, 78, 74], enrolled: true },
];

// ─── Easy ───────────────────────────────────────────────────────────────────────────

/** EASY: Count products that are in stock. */
export function countInStock(items: Product[]): number {
  return 0;
}

/** EASY: Calculate total cost of an order (qty * unitPrice - discount). */
export function calculateOrderTotal(items: OrderLine[]): number {
  return 0;
}

// ─── Medium ───────────────────────────────────────────────────────────────────

/** MEDIUM: Find the median of numbers (sort, pick middle or avg of two middles). */
export function median(numbers: number[]): number {
  return 0;
}

/** MEDIUM: Remove duplicate strings (preserve first occurrence order). */
export function uniqueStrings(items: string[]): string[] {
  return [];
}

// ─── Hard ──────────────────────────────────────────────────────────────────────

/** HARD: Extract unique sensor IDs from readings. */
export function getUniqueSensorIds(readings: Reading[]): string[] {
  return [];
}

/** HARD: Calculate average reading value per sensor (rounded to 1 decimal). */
export function averageBySensor(readings: Reading[]): Record<string, number> {
  return {};
}

/** HARD: Count how many times each attendance status occurs (at capacity / under capacity / over capacity). */
export function countEventAttendanceStatus(events: Event[]): Record<string, number> {
  return {};
}

// ─── Harder ─────────────────────────────────────────────────────────────────

/** HARDER: Calculate net balance (credits - debits). */
export function netBalance(transactions: Transaction[]): number {
  return 0;
}

/** HARDER: Find the mode (most frequent value) of an array. Return null if empty. */
export function mode(values: number[]): number | null {
  return null;
}

/** HARDER: Calculate average GPA per student (rounded to 1 decimal). */
export function averageGPA(students: Student[]): Record<string, number> {
  return {};
}