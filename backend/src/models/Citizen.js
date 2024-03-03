import mongoose from "mongoose";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import bcrypt from "bcryptjs";

class User {
  constructor() {
    this.userSchema = new mongoose.Schema({
      username: {
        type: String,
        required: true,
        minlength: [3, "At least three characheter"],
        validate: {
          validator: async function (username) {
            const bannedUsernames = await loadBannedUsernames(import.meta.url); // Load banned usernames dynamically
            return !bannedUsernames.includes(username.toLowerCase());
          },
          message: "This Username is banned and not allowed",
        },
      },
      password: {
        type: String,
        minlength: [4, "At least Four characheter for the password"],
        required: true,
      },

      status: {
        type: String,
        enum: ["online", "offline"],
      },
      healthStatus: {
        type: String,
        enum: ["OK", "Help", "Emergency"],
      },
      healthStatusTimestamp: {
        type: Date,
        default: Date.now
      },

    });

    this.userSchema.pre("save", async function (next) {
      if (!this.isModified("password")) return next();
      this.password = await bcrypt.hash(this.password, 12);
      next();
    });

    this.userSchema.methods.checkPasswords = async function (req_pwd, enc_pwd) {
      return await bcrypt.compare(req_pwd, enc_pwd);
    };

    this.Citizen = mongoose.model("Citizen", this.userSchema);
  }
}

// Function to load banned usernames from an external file
async function loadBannedUsernames(importUrl) {
  try {
    const filePath = join(
      dirname(fileURLToPath(importUrl)),
      "data",
      "bannedUsernames.json",
    );
    const data = fs.readFileSync(filePath, "utf8");

    return JSON.parse(data);
  } catch (err) {
    console.error("Error loading banned usernames:", err);
    return [];
  }
}

export default new User().Citizen;
