import { connect } from "../config/inMemoryDB.js";

describe("connecting to DB", () => {
  it("responds", async () => {
    const conn = await connect();

    expect(conn).toBe(true);
  });
});
