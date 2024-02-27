import { connect, disconnect, dropCollections } from "../config/inMemoryDB.js";
import supertest from "supertest";
import app from "../../app.js";
import Citizen from "../models/Citizen.js";
import { getJwtToken } from "./../utils/jwt.utils.js";
import { ChatService } from "../services/chatServices.js";
// import jest from "jest";

// jest.mock(ChatService);

describe("Messages public", () => {
  beforeAll(async () => await connect());
  afterAll(async () => await disconnect());
  afterEach(async () => await dropCollections());

  describe("GET /public messages", () => {
    let token;

    beforeEach(async () => {
      // Create a mock user
      const user = await Citizen.create({
        username: "testuser",
        password: "testpassword",
      });
      token = getJwtToken(user._id);
    });

    afterEach(async () => await dropCollections());

    it("should return all messages when authenticated", async () => {
      const response = await supertest(app)
        .get("/api/v1/messages/")
        .set("Authorization", `Bearer ${token}`)
        .expect(200);

      expect(response.body).toHaveProperty("messages");
      expect(response.body.message).toBe("Fetched old messages");
    });

    it("should return a 403 error when not authenticated", async () => {
      const response = await supertest(app)
        .get("/api/v1/messages/")
        .expect(403);

      expect(response.body.status).toBe("auth-failure");
      expect(response.body.error).toBe(
        "You are not logged in! Please log in to get access.",
      );
    });

    it("should return a 403 error when the user has been deleted", async () => {
      // Delete the user from the database
      await Citizen.deleteMany();

      const response = await supertest(app)
        .get("/api/v1/messages/")
        .set("Authorization", `Bearer ${token}`)
        .expect(403);

      expect(response.body.status).toBe("auth-failure");
      expect(response.body.error).toBe(
        "The User belonging to this token does no longer exist",
      );
    });
  });

  describe("/ POST public message", () => {
    let token;
    let user;
    beforeEach(async () => {
      // Create a mock user
      user = await Citizen.create({
        username: "testuser",
        password: "testpassword",
      });
      token = getJwtToken(user._id);
    });

    afterEach(async () => await dropCollections());

    it("should return all messages when authenticated", async () => {
      // Define the request body
      const requestBody = { message: "Test message" };

      const response = await supertest(app)
        .post("/api/v1/messages/")
        .set("Authorization", `Bearer ${token}`)
        .set("User", JSON.stringify(user))
        .send(requestBody)
        .expect(200);

      expect(response.body).toHaveProperty("newMessage");
      expect(response.body.message).toBe("Message sent.");
    });
  });
});

describe("Private messages", () => {
  beforeAll(async () => await connect());
  afterAll(async () => await disconnect());

  describe("GET messages of a user", () => {
    let token;
    let user;
    beforeEach(async () => {
      // Create a mock user
      user = await Citizen.create({
        username: "testuser",
        password: "testpassword",
      });
      token = getJwtToken(user._id);
    });
    afterEach(async () => await dropCollections());
    it("", () => {});
  });
});
