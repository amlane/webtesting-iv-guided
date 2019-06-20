const db = require("../data/dbConfig.js");
const { insert } = require("./hobbitsModel.js");

describe("hobbits model", () => {
  beforeEach(async () => {
    await db("hobbits").truncate();
  });
  it("should be true", () => {
    expect(true).toBe(true);
  });
  it("should set environment to testing", () => {
    expect(process.env.DB_ENV).toBe("testing");
  });
  describe("insert()", () => {
    it("should insert a new hobbit", async () => {
      await insert({ name: "Amanda" });
      const hobbits = await db("hobbits");
      expect(hobbits).toHaveLength(1);
    });
    it("should insert the provided hobbit", async () => {
      let hobbit = { name: "John" };
      const inserted = await insert(hobbit);
      expect(inserted.name).toBe(hobbit.name);
    });
  });
});
