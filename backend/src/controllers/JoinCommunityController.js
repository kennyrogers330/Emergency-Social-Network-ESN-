import { promisify } from "util";
import Citizen from "../models/Citizen.js";
import jwt from "jsonwebtoken";
import APIFeatures from "../utils/apiFeatures.js";

class AuthController {
  static sendResponse(res, user, status) {
    const id = user._id;
    const token = jwt.sign({ id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    const attributes = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_LIFE_SPAN * 24 * 60 * 60 * 1000,
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
            { new: true },
          );

          onlineCitizen.password = undefined;
          req.session.user = onlineCitizen;
          AuthController.sendResponse(res, onlineCitizen, "loged-in");
        }
      } else {
        const newCitizen = await Citizen.create({
          username,
          password,
          status: "online",
        });
        newCitizen.password = undefined;
        req.session.user = newCitizen;
        AuthController.sendResponse(res, newCitizen, "signed-up");
        console.log(newCitizen);
      }
    } catch (err) {
      res.status(400).json({
        status: "auth-failure",
        error: err.message,
      });
    }
  }

  static async getHome(req, res, next) {
    try {
      const citizens = await Citizen.find({}, { _id: 0, username: 1 });
      const usernames = citizens.map((Citizen) => Citizen.username);

      res.status(200).json({
        usernames,
      });
    } catch (err) {
      res.status(400).json({
        status: "auth-failure",
        error: err.message,
      });
    }
  }

  static async getAllDirectory(req, res, next) {
    try {
      const features = new APIFeatures(Citizen.find(), req.query)
        .sort()
        .fieldLimiting();
      const citizens = await features.query;
      res.status(200).json({
        citizens,
      });
    } catch (err) {
      res.status(400).json({
        status: "auth-failure",
        error: err.message,
      });
    }
  }

  // static async logout(req, res) {
  //   try {
  //     const expireToken = jwt.sign({}, process.env.JWT_SECRET, {
  //       expiresIn: 1,
  //     });
  //     // res.cookie("jwt", "", {
  //     //   expires: new Date(Date.now() + 10 * 1000),
  //     //   httpOnly: true,
  //     // });
  //     res.cookie("jwt", expireToken, {
  //       httpOnly: true,
  //       expires: new Date(Date.now() + 1),
  //     });

  //    if (req.session) {
  //      req.session.destroy((err) => {
  //        if (err) {
  //          // Handle error
  //          console.log(err);
  //          res.status(500).json({ status: "failure", error: err.message });
  //        } else {
  //          // Session destroyed
  //          res.status(200).json({ status: "success" });
  //        }
  //      });
  //    } else {
  //      res.status(200).json({ status: "success" });
  //    }
  //   } catch (err) {
  //     res.status(400).json({
  //       status: "auth-failure",
  //       error: err.message,
  //     });
  //   }
  // }

  static async logout(req, res) {
    try {
      if (!req.session || !req.session.user) {
        return res.status(401).json({
          status: "failure",
          error: "You are not logged in!",
        });
      }

      const expireToken = jwt.sign({}, process.env.JWT_SECRET, {
        expiresIn: 1,
      });
      res.cookie("jwt", expireToken, {
        httpOnly: true,
        expires: new Date(Date.now() + 1),
      });

      req.session.destroy((err) => {
        if (err) {
          console.error(err);
          return res
            .status(500)
            .json({ status: "failure", error: err.message });
        }
        return res
          .status(200)
          .json({ status: "success", message: "Logged out" });
      });
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        status: "auth-failure",
        error: err.message,
      });
    }
  }

  // static async protect(req, res, next) {
  //   let token;
  //   if (
  //     req.headers.authorization &&
  //     req.headers.authorization.startsWith("Bearer")
  //   ) {
  //     token = req.headers.authorization.split(" ")[1];
  //   }
  //   // else if (req.cookies.jwt) {
  //   //   token = req.cookies.jwt;
  //   // }
  //   console.log(req.headers.authorization);
  //   if (!token) {
  //     // console.log(req);
  //     return res.status(401).json({
  //       status: "auth-failure",
  //       error: "You are not logged in! Please log in to get access.",
  //     });
  //   } else {
  //     return res.status(401).json({
  //       status: "success",
  //       error: "You are not logged in! Please log in to get access.",
  //     });
  //   }
  // }

  static async protect(req, res, next) {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      // console.log(req);
      return res.status(401).json({
        status: "auth-failure",
        error: "You are not logged in! Please log in to get access.",
      });
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const auth_citizen = await Citizen.findById(decoded.id);

    if (!auth_citizen) {
      return res.status(401).json({
        status: "auth-failure",
        error: "The User belonging to this token does no longer exist",
      });
    }

    req.user = auth_citizen;
    res.locals.user = auth_citizen;
    next();
  }
}
export default AuthController;
