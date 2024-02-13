import Citizen from "./../models/userModel.js";
import APIFeatures from "./../utils/apiFeatures.js";
/** 
 http://localhost:8000/
 */
export const getHome = async (req, res, next) => {
  const citizens = await Citizen.find({}, { _id: 0, username: 1 });
  const usernames = citizens.map((Citizen) => Citizen.username);

  res.status(200).json({
    usernames,
  });
};

/**
 http://localhost:8000/citizens?sort=-status,username,&fields=username,status
 */

export const getAllDirectory = async (req, res, next) => {
  const features = new APIFeatures(Citizen.find(), req.query)
    .sort()
    .fieldLimiting();
  // const citizens = await query.select("-__v");
  const citizens = await features.query;
  res.status(200).json({
    citizens,
  });
};
