import supertest from "supertest";
import app from "./../../app.js"; // Assuming your server file is named app.js

describe("GET /", () => {
  it("responds with status 200", async () => {
    const response = await supertest(app).get("/api/welcome");
    expect(response.statusCode).toBe(200);
  });
});
