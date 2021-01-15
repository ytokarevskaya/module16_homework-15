import { getPercents } from "../hw16"

describe("percentage function test", () => {
  it("checking decimal result: 15% of 25 equal to 3.75", () => {
    const result = getPercents(15, 25);
    expect(result).toBe(3.75);
  }),
  it("checking incorrect input: integers as custom strings", () => {
    const result = getPercents("3", "4");
    expect(result).toBe(0.12);
  }),
  it("checking incorrect input: custom strings", () => {
    const result = getPercents("string1", "string2");
    expect(result).toBeNaN();
  }),
  it("checking incorrect input: nulls", () => {
    const result = getPercents();
    expect(result).toBeNaN();
  })
});
