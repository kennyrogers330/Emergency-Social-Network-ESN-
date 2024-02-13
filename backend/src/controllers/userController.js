
import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import Chat from "../models/chatModel.js";

export const joinCommunity = (req, res) => {
  let username = req.body[0].username
  let password = req.body[0].password
  let responseData = {}
  
  // Check if the user already exists in the database
  User.findOne({ username: username })
      .then(userDB => {
          if (userDB) {
              bcrypt.compare(password, userDB.password)
                  .then(match => {
                      if (match) {
                          User.findOneAndUpdate({ username: username },  { $set: { status: "Online" } })
                              .then(() => {
                                  // res.status(200).json({ message: 'Existing Login successful', userDB })
                                  responseData.loggedIn = userDB
                              })
                              .catch(err => {
                                  console.error("Error updating user status:", err);
                                  res.status(500).json({ message: "Internal Server Error" });
                              })
                          Chat.find()
                              .then(charts => {
                                  responseData.charts = charts
                              })
                              .catch (error => {
                                  console.log(error);
                                  res.status(500).send("Internal Server Error");
                                })
                          User.find()
                              .then(users => {
                                 responseData.users = users
                                 res.status(200).json({ message: 'Existing Login successful', responseData })
                                })
                                .catch (error => {
                                    console.log(error);
                                    res.status(500).send("Internal Server Error");
                                  })
                      } else {
                          console.log("Wrong Password");
                          res.status(400).json({ message: 'Wrong Password' });
                      }
                  })
                  .catch(err => {
                      console.error("Error comparing passwords:", err);
                      res.status(500).json({ message: "Internal Server Error" });
                  });
          } else {
              // Register the user if not found in the database.
              bcrypt.hash(password, 12)
                  .then(hashedPassword => {
                      User.create({ username, password: hashedPassword, status: "Online" })
                          .then(newUser => {
                              // res.status(200).json({ message: 'New Login successful', newUser });
                              responseData.loggedIn = newUser
                          })
                          .catch(err => {
                              console.error("Error creating new user:", err);
                              res.status(500).json({ message: "Internal Server Error" });
                          })
                      Chat.find()
                          .then(charts => {
                              responseData.charts = charts
                            })
                          .catch (error => {
                              console.log(error);
                              res.status(500).send("Internal Server Error");
                            })
                      User.find()
                          .then(users => {
                              responseData.users = users
                              res.status(200).json({ message: 'Existing Login successful', responseData })
                                })
                          .catch (error => {
                              console.log(error);
                              res.status(500).send("Internal Server Error");
                            })
                  })
                  .catch(err => {
                      console.error("Error hashing password:", err);
                      res.status(500).json({ message: "Internal Server Error" });
                  });
          }
      })
      .catch(error => {
          console.error("Error during user lookup:", error);
          res.status(500).json({ message: "Internal Server Error" });
      });
}

export const getCitizens = (req, res) => {
  User.find()
    .then(users => {
        res.status(200).json({users})
    })
    .catch (error => {
        console.log(error);
        res.status(500).send("Internal Server Error");
      })
}