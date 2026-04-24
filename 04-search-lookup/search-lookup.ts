// ─── Search & Lookup: 10 challenges (2 easy, 2 medium, 3 hard, 3 harder) ───

export type Author = { id: string; name: string; country: string; birthYear: number; genres: string[] };
export type Book = { isbn: string; title: string; authorId: string; price: number; rating: number; publishedYear: number };
export type User = { id: string; username: string; email: string; role: 'admin' | 'editor' | 'viewer'; suspended: boolean };
export type Package = { name: string; version: string; downloads: number; peerDeps: string[]; deprecated: boolean };
export type Route = { id: string; origin: string; destination: string; distance: number; estimatedTime: number };
export type Appointment = { id: string; patient: string; doctor: string; date: Date; duration: number; type: 'checkup' | 'followup' | 'consultation' };
export type Device = { id: string; type: 'laptop' | 'tablet' | 'phone'; brand: string; model: string; os: string | null };
export type FileEntry = { name: string; extension: string; size: number; modified: Date; hidden: boolean };

export const authors: Author[] = [
  { id: 'a1', name: 'George Orwell', country: 'UK', birthYear: 1903, genres: ['Sci-Fi', 'Dystopia'] },
  { id: 'a2', name: 'Jane Austen', country: 'UK', birthYear: 1775, genres: ['Romance', 'Classic'] },
  { id: 'a3', name: 'Haruki Murakami', country: 'Japan', birthYear: 1949, genres: ['Magical Realism', 'Fiction'] },
  { id: 'a4', name: 'Gabriel Garcia Marquez', country: 'Colombia', birthYear: 1927, genres: ['Magical Realism', 'Classic'] },
];

export const books: Book[] = [
  { isbn: '978-0-06-112008-4', title: '1984', authorId: 'a1', price: 14.99, rating: 4.5, publishedYear: 1949 },
  { isbn: '978-0-452-28423-4', title: 'Animal Farm', authorId: 'a1', price: 9.99, rating: 4.2, publishedYear: 1945 },
  { isbn: '978-0-14-143951-8', title: 'Pride and Prejudice', authorId: 'a2', price: 12.99, rating: 4.6, publishedYear: 1813 },
  { isbn: '978-0-375-70416-1', title: 'Norwegian Wood', authorId: 'a3', price: 15.99, rating: 4.1, publishedYear: 1987 },
  { isbn: '978-0-06-085052-4', title: 'One Hundred Years of Solitude', authorId: 'a4', price: 16.99, rating: 4.4, publishedYear: 1967 },
];

export const users: User[] = [
  { id: 'u1', username: 'admin_jane', email: 'jane@corp.com', role: 'admin', suspended: false },
  { id: 'u2', username: 'editor_bob', email: 'bob@corp.com', role: 'editor', suspended: false },
  { id: 'u3', username: 'viewer_alice', email: 'alice@corp.com', role: 'viewer', suspended: true },
  { id: 'u4', username: 'viewer_mike', email: 'mike@corp.com', role: 'viewer', suspended: false },
];

export const packages: Package[] = [
  { name: 'lodash', version: '4.17.21', downloads: 50000000, peerDeps: [], deprecated: false },
  { name: 'react', version: '18.2.0', downloads: 30000000, peerDeps: ['react-dom'], deprecated: false },
  { name: 'moment', version: '2.29.4', downloads: 15000000, peerDeps: [], deprecated: true },
  { name: 'express', version: '4.18.2', downloads: 25000000, peerDeps: [], deprecated: false },
  { name: 'axios', version: '1.6.0', downloads: 20000000, peerDeps: [], deprecated: false },
];

export const routes: Route[] = [
  { id: 'r1', origin: 'NYC', destination: 'LA', distance: 4500, estimatedTime: 360 },
  { id: 'r2', origin: 'NYC', destination: 'Chicago', distance: 1200, estimatedTime: 120 },
  { id: 'r3', origin: 'LA', destination: 'Seattle', distance: 1800, estimatedTime: 180 },
  { id: 'r4', origin: 'Chicago', destination: 'LA', distance: 3500, estimatedTime: 300 },
];

export const appointments: Appointment[] = [
  { id: 'a1', patient: 'Alice', doctor: 'Dr. Smith', date: new Date('2024-01-15T09:00:00'), duration: 30, type: 'checkup' },
  { id: 'a2', patient: 'Bob', doctor: 'Dr. Smith', date: new Date('2024-01-15T10:00:00'), duration: 45, type: 'consultation' },
  { id: 'a3', patient: 'Carol', doctor: 'Dr. Jones', date: new Date('2024-01-15T11:00:00'), duration: 30, type: 'followup' },
  { id: 'a4', patient: 'Dave', doctor: 'Dr. Smith', date: new Date('2024-01-15T14:00:00'), duration: 30, type: 'checkup' },
];

export const devices: Device[] = [
  { id: 'd1', type: 'laptop', brand: 'Apple', model: 'MacBook Pro', os: 'macOS' },
  { id: 'd2', type: 'laptop', brand: 'Dell', model: 'XPS 15', os: 'Windows' },
  { id: 'd3', type: 'tablet', brand: 'Apple', model: 'iPad Pro', os: 'iPadOS' },
  { id: 'd4', type: 'phone', brand: 'Samsung', model: 'Galaxy S23', os: 'Android' },
  { id: 'd5', type: 'phone', brand: 'Apple', model: 'iPhone 15', os: 'iOS' },
  { id: 'd6', type: 'laptop', brand: 'Lenovo', model: 'ThinkPad X1', os: null },
];

export const files: FileEntry[] = [
  { name: 'report.pdf', extension: 'pdf', size: 2500000, modified: new Date('2024-01-10'), hidden: false },
  { name: '.gitignore', extension: '', size: 500, modified: new Date('2024-01-01'), hidden: true },
  { name: 'data.csv', extension: 'csv', size: 500000, modified: new Date('2024-01-12'), hidden: false },
  { name: 'notes.txt', extension: 'txt', size: 2000, modified: new Date('2024-01-14'), hidden: false },
  { name: '.env', extension: '', size: 100, modified: new Date('2024-01-05'), hidden: true },
];

// ─── Easy ───────────────────────────────────────────────────────────────────────────

/** EASY: Find a book by ISBN, return null if not found. */
export function findBookByISBN(books: Book[], isbn: string): Book | null {
  return null;
}

/** EASY: Get all non-suspended viewers. */
export function activeViewers(users: User[]): User[] {
  return [];
}

// ─── Medium ─────────────────────────────────────────────────────────────────

/** MEDIUM: Find the most downloaded non-deprecated package. */
export function mostPopularPackage(packages: Package[]): Package | null {
  return null;
}

/** MEDIUM: Find the shortest route by estimated time. */
export function shortestRoute(routes: Route[], origin: string, destination: string): Route | null {
  return null;
}

// ─── Hard ──────────────────────────────────────────────────────────────────────

/** HARD: Find authors by country (case-insensitive). */
export function findAuthorsByCountry(authors: Author[], country: string): Author[] {
  return [];
}

/** HARD: Find all books by a specific author ID, sorted by rating descending. */
export function booksByAuthorSorted(books: Book[], authorId: string): Book[] {
  return [];
}

/** HARD: Find appointments for a specific doctor on a specific date. */
export function appointmentsForDoctorOnDate(appointments: Appointment[], doctor: string, date: Date): Appointment[] {
  return [];
}

// ─── Harder ─────────────────────────────────────────────────────────────────

/** HARDER: Search devices by partial brand or model match (case-insensitive). */
export function searchDevices(devices: Device[], query: string): Device[] {
  return [];
}

/** HARDER: Find files matching extension, excluding hidden files, sorted by size descending. */
export function visibleFilesByExtension(files: FileEntry[], extension: string): FileEntry[] {
  return [];
}

/** HARDER: Build an author lookup with their book count and average price. */
export function authorStats(authors: Author[], books: Book[]): Record<string, { authorName: string; bookCount: number; avgPrice: number }> {
  return {};
}