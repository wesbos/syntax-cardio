// ─── Transformations: 10 challenges (2 easy, 2 medium, 3 hard, 3 harder) ───

export type Movie = { id: string; title: string; year: number; genres: string[]; duration: number };
export type Employee = { id: string; firstName: string; lastName: string; title: string; salary: number; startYear: number };
export type Task = { id: string; title: string; priority: 'low' | 'medium' | 'high'; completed: boolean; tags: string[] };
export type LogEntry = { timestamp: Date; level: 'DEBUG' | 'INFO' | 'WARN' | 'ERROR'; service: string; message: string };
export type Coordinate = { lat: number; lng: number };
export type Node = { id: string; value: number; next: string | null };
export type ConfigOption = { key: string; value: string; editable: boolean };

export const movies: Movie[] = [
  { id: 'm1', title: 'The Matrix', year: 1999, genres: ['Sci-Fi', 'Action'], duration: 136 },
  { id: 'm2', title: 'Inception', year: 2010, genres: ['Sci-Fi', 'Thriller'], duration: 148 },
  { id: 'm3', title: 'The Dark Knight', year: 2008, genres: ['Action', 'Drama'], duration: 152 },
  { id: 'm4', title: 'Interstellar', year: 2014, genres: ['Sci-Fi', 'Adventure'], duration: 169 },
  { id: 'm5', title: 'Pulp Fiction', year: 1994, genres: ['Crime', 'Drama'], duration: 154 },
];

export const employees: Employee[] = [
  { id: 'e1', firstName: 'Alice', lastName: 'Chen', title: 'Engineer', salary: 95000, startYear: 2020 },
  { id: 'e2', firstName: 'Bob', lastName: 'Smith', title: 'Designer', salary: 85000, startYear: 2021 },
  { id: 'e3', firstName: 'Carol', lastName: 'Johnson', title: 'Engineer', salary: 100000, startYear: 2019 },
  { id: 'e4', firstName: 'Dave', lastName: 'Lee', title: 'Manager', salary: 120000, startYear: 2018 },
];

export const tasks: Task[] = [
  { id: 't1', title: 'Fix login bug', priority: 'high', completed: true, tags: ['frontend', 'urgent'] },
  { id: 't2', title: 'Write docs', priority: 'low', completed: false, tags: ['docs'] },
  { id: 't3', title: 'Update dependencies', priority: 'medium', completed: true, tags: ['maintenance'] },
  { id: 't4', title: 'Add dark mode', priority: 'medium', completed: false, tags: ['frontend', 'feature'] },
];

export const logs: LogEntry[] = [
  { timestamp: new Date('2024-01-15T10:00:00'), level: 'INFO', service: 'api', message: 'Server started' },
  { timestamp: new Date('2024-01-15T10:05:00'), level: 'WARN', service: 'db', message: 'Slow query' },
  { timestamp: new Date('2024-01-15T10:10:00'), level: 'ERROR', service: 'api', message: 'Connection timeout' },
  { timestamp: new Date('2024-01-15T10:15:00'), level: 'DEBUG', service: 'cache', message: 'Cache miss' },
  { timestamp: new Date('2024-01-15T10:20:00'), level: 'INFO', service: 'api', message: 'Request processed' },
];

export const coordinates: Coordinate[] = [
  { lat: 40.7128, lng: -74.006 },
  { lat: 34.0522, lng: -118.2437 },
  { lat: 51.5074, lng: -0.1278 },
];

export const nodes: Node[] = [
  { id: 'n1', value: 10, next: 'n2' },
  { id: 'n2', value: 20, next: 'n3' },
  { id: 'n3', value: 30, next: null },
];

export const configOptions: ConfigOption[] = [
  { key: 'theme', value: 'dark', editable: true },
  { key: 'language', value: 'en', editable: true },
  { key: 'maxUsers', value: '100', editable: false },
];

// ─── Easy ───────────────────────────────────────────────────────────────────────────

/** EASY: Convert movie titles to uppercase. */
export function titlesUppercase(movies: Movie[]): string[] {
  return [];
}

/** EASY: Format employees as "FirstName LastName — Title". */
export function formatEmployees(employees: Employee[]): string[] {
  return [];
}

// ─── Medium ─────────────────────────────────────────────────────────────────

/** MEDIUM: Convert coordinates to "[lat, lng]" strings. */
export function coordinatesToStrings(coords: Coordinate[]): string[] {
  return [];
}

/** MEDIUM: Extract all unique tags from tasks. */
export function extractAllTags(tasks: Task[]): string[] {
  return [];
}

// ─── Hard ────────────────────────────────────────��─────────────────────────────

/** HARD: Extract only DEBUG and INFO logs, format as "HH:MM | SERVICE | message". */
export function extractInfoLogs(logs: LogEntry[]): string[] {
  return [];
}

/** HARD: Pair each task with its completion status as "title: [DONE/PENDING]". */
export function tasksWithStatus(tasks: Task[]): string[] {
  return [];
}

/** HARD: Flatten nested arrays of config options, extracting only editable keys. */
export function editableKeys(configGroups: ConfigOption[][]): string[] {
  return [];
}

// ─── Harder ─────────────────────────────────────────────────────────────────────────

/** HARDER: Transform linked nodes into a flat list of values following the chain. */
export function flattenNodeChain(nodes: Node[], startId: string): number[] {
  return [];
}

/** HARDER: Create a lookup map from employee ID to full name and years of tenure. */
export function buildEmployeeLookup(employees: Employee[]): Record<string, { name: string; tenure: number }> {
  return {};
}

/** HARDER: Pivot movies into a map of genre -> array of titles, sorted alphabetically. */
export function pivotByGenre(movies: Movie[]): Record<string, string[]> {
  return {};
}