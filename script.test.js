// tests/utils.test.js
import { describe, it, expect } from "vitest";
import {
  shuffleArray,
  getRandomElementFromArray,
  getContinentOptions,
  getCountryOptions,
  getCityOptions,
} from "./utils.js";

// Dummy GEOGRAPHY_DATA for testing
const GEOGRAPHY_DATA = {
  Asia: {
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    China: ["Beijing", "Shanghai", "Shenzhen"],
  },
  Europe: {
    France: ["Paris", "Lyon", "Marseille"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  },
  Africa: {
    Egypt: ["Cairo", "Alexandria", "Giza"],
  },
  Oceania: {
    Australia: ["Sydney", "Melbourne", "Perth"],
  },
};

describe("basic utility tests", () => {
  it("shuffleArray returns same elements in different order", () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffleArray([...arr]);
    expect(shuffled.sort()).toEqual(arr.sort());
  });

  it("getRandomElementFromArray returns an element from array", () => {
    const arr = ["apple", "banana", "cherry"];
    const element = getRandomElementFromArray(arr);
    expect(arr).toContain(element);
  });

  it("getContinentOptions includes the correct continent", () => {
    const options = getContinentOptions("Asia");
    expect(options).toContain("Asia");
    expect(options.length).toBe(4);
  });

  it("getCountryOptions includes the correct country", () => {
    const options = getCountryOptions("Europe", "France");
    expect(options).toContain("France");
    expect(options.length).toBe(4);
  });

  it("getCityOptions includes the correct city", () => {
    const options = getCityOptions("Asia", "China", "Beijing");
    expect(options).toContain("Beijing");
    expect(options.length).toBe(4);
  });
});
