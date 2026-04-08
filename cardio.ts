// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

export type Inventor = {
  first: string;
  last: string;
  year: number;
  passed: number;
};

export const inventors: Inventor[] = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 },
];

export const people = [
  'Bernhard, Sandra',
  'Bethea, Erin',
  'Becker, Carl',
  'Bentsen, Lloyd',
  'Beckett, Samuel',
  'Blake, William',
  'Berger, Ric',
  'Beddoes, Mick',
  'Beethoven, Ludwig',
  'Belloc, Hilaire',
  'Begin, Menachem',
  'Bellow, Saul',
  'Benchley, Robert',
  'Blair, Robert',
  'Benenson, Peter',
  'Benjamin, Walter',
  'Berlin, Irving',
  'Benn, Tony',
  'Benson, Leana',
  'Bent, Silas',
  'Berle, Milton',
  'Berry, Halle',
  'Biko, Steve',
  'Beck, Glenn',
  'Bergman, Ingmar',
  'Black, Elk',
  'Berio, Luciano',
  'Berne, Eric',
  'Berra, Yogi',
  'Berry, Wendell',
  'Bevan, Aneurin',
  'Ben-Gurion, David',
  'Bevel, Ken',
  'Biden, Joseph',
  'Bennington, Chester',
  'Bierce, Ambrose',
  'Billings, Josh',
  'Birrell, Augustine',
  'Blair, Tony',
  'Beecher, Henry',
  'Biondo, Frank',
];

/** Sample list (offline). In the video, this comes from Wikipedia’s boulevards category. */
export const parisBoulevards = [
  'Boulevard de la Madeleine',
  'Boulevard Haussmann',
  'Boulevard de Sébastopol',
  'Boulevard des Capucines',
];

export const transportData = [
  'car',
  'car',
  'truck',
  'truck',
  'bike',
  'walk',
  'car',
  'van',
  'bike',
  'walk',
  'car',
  'van',
  'car',
  'truck',
];

// ─── Implement the exercises below (tests live in cardio.test.ts) ───

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
export function exercise1(list: Inventor[]): Inventor[] {
  return ['wes'];
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
export function exercise2(list: Inventor[]): string[] {
  return [];
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
export function exercise3(list: Inventor[]): Inventor[] {
  return [];
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
export function exercise4(list: Inventor[]): number {
  return 0;
}

// 5. Sort the inventors by years lived (longest-lived first)
export function exercise5(list: Inventor[]): Inventor[] {
  return [];
}

// 6. Boulevards in Paris that contain 'de' anywhere in the name
export function exercise6(boulevardNames: string[]): string[] {
  return [];
}

// 7. Sort the people alphabetically by last name
export function exercise7(list: string[]): string[] {
  return [];
}

// 8. Sum up the instances of each transport type
export function exercise8(items: string[]): Record<string, number> {
  return {};
}
