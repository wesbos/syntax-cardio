import { describe, expect, it } from "vitest";
import {
  activeViewers,
  appointments,
  appointmentsForDoctorOnDate,
  authorStats,
  authors,
  books,
  booksByAuthorSorted,
  devices,
  files,
  findAuthorsByCountry,
  findBookByISBN,
  mostPopularPackage,
  packages,
  routes,
  users,
  searchDevices,
  shortestRoute,
  visibleFilesByExtension,
} from "./search-lookup";

// ─── Easy ───────────────────────────────────────────────────────────────────────────

describe("EASY — find book by ISBN", () => {
  it("returns book or null", () => {
    expect(findBookByISBN(books, "978-0-06-112008-4")?.title).toBe("1984");
    expect(findBookByISBN(books, "invalid")).toBeNull();
  });
});

describe("EASY — active viewers", () => {
  it("returns non-suspended viewers", () => {
    const result = activeViewers(users);
    expect(result).toHaveLength(2);
    expect(result.every((u) => u.role === "viewer" && !u.suspended)).toBe(true);
  });
});

// ─── Medium ─────────────────────────────────────────────────────────────────

describe("MEDIUM — most popular package", () => {
  it("finds highest downloads among non-deprecated", () => {
    expect(mostPopularPackage(packages)?.name).toBe("lodash");
  });
});

describe("MEDIUM — shortest route", () => {
  it("finds quickest route between two cities", () => {
    const result = shortestRoute(routes, "NYC", "LA");
    expect(result?.id).toBe("r1");
    expect(shortestRoute(routes, "XYZ", "ABC")).toBeNull();
  });
});

// ─── Hard ──────────────────────────────────────────────────────────────────────

describe("HARD — find authors by country", () => {
  it("finds authors case-insensitively", () => {
    const ukAuthors = findAuthorsByCountry(authors, "UK");
    expect(ukAuthors).toHaveLength(2);
    expect(ukAuthors.map((a) => a.name)).toContain("George Orwell");
  });
});

describe("HARD — books by author sorted", () => {
  it("returns books sorted by rating descending", () => {
    const result = booksByAuthorSorted(books, "a1");
    expect(result).toHaveLength(2);
    expect(result[0].title).toBe("1984");
    expect(result[1].title).toBe("Animal Farm");
  });
});

describe("HARD — appointments for doctor on date", () => {
  it("finds appointments for specific doctor and date", () => {
    const targetDate = new Date("2024-01-15");
    const result = appointmentsForDoctorOnDate(
      appointments,
      "Dr. Smith",
      targetDate,
    );
    expect(result).toHaveLength(3);
    expect(result.every((a) => a.doctor === "Dr. Smith")).toBe(true);
  });
});

// ─── Harder ─────────────────────────────────────────────────────────────────

describe("HARDER — search devices", () => {
  it("matches partial brand or model", () => {
    const result = searchDevices(devices, "apple");
    expect(result).toHaveLength(3);
    expect(result.every((d) => d.brand.toLowerCase().includes("apple"))).toBe(
      true,
    );

    const result2 = searchDevices(devices, "pro");
    expect(result2).toHaveLength(2);
  });
});

describe("HARDER — visible files by extension", () => {
  it("returns non-hidden files, sorted by size descending", () => {
    const result = visibleFilesByExtension(files, "pdf");
    expect(result).toHaveLength(1);
    expect(result[0].hidden).toBe(false);

    const result2 = visibleFilesByExtension(files, "");
    expect(result2).toHaveLength(1);
    expect(result2[0].name).toBe(".gitignore");
  });
});

describe("HARDER — author stats", () => {
  it("builds lookup with book count and avg price", () => {
    const result = authorStats(authors, books);
    expect(result["a1"]).toEqual({
      authorName: "George Orwell",
      bookCount: 2,
      avgPrice: 12.49,
    });
    expect(result["a2"].bookCount).toBe(1);
    expect(result["a3"].bookCount).toBe(1);
    expect(result["a4"].bookCount).toBe(1);
  });
});
