import { token } from "morgan";
import Citizen from "./../models/userModel.js";
import jwt from "jsonwebtoken";

class AuthController {
  static sendResponse(res, user, status) {
    const id = user._id;
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const attributes = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_LIFE_SPAN * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };
    res.cookie("jwt", token, attributes);

    res.status(201).json({
      status,
      token,
      user,
    });
  }

  static async Signup(req, res, next) {
    try {
      const { username, password } = req.body;
      const user = await Citizen.findOne({ username });

      if (user) {
        if (
          !password ||
          !(await user.checkPasswords(password, user.password))
        ) {
          return res
            .status(400)
            .json({ error: "wrong password", status: "auth-failure" });
        } else {
          const onlineCitizen = await Citizen.findByIdAndUpdate(
            user._id,
            { $set: { status: "online" } },
            { new: true }
          );

          onlineCitizen.password = undefined;
          AuthController.sendResponse(res, onlineCitizen, "loged-in");
        }
      } else {
        const newCitizen = await Citizen.create({
          username,
          password,
          status: "online",
        });
        newCitizen.password = undefined;
        AuthController.sendResponse(res, newCitizen, "signed-up");
      }
    } catch (err) {
      res.status(400).json({
        status: "auth-failure",
        error: err.message,
      });
    }
  }
}
export default AuthController;
