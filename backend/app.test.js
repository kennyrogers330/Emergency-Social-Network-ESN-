import supertest from "supertest";
import app from "./app";

describe("Is welcome working", () => {
  describe("GET /api/welcome", () => {
    test("should return 200 code", async () => {
      const response = await supertest(app).get("/api/welcome");
      expect(response.statusCode).toBe(200);
    });
  });
});
