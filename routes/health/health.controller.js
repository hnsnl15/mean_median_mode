import asyncHandler from "express-async-handler";

export const healthcheck = asyncHandler((req, res) => {
  try {
    res.status(200).json({message: "ok"});
  } catch (error) {
    res.status(400).json({message: "Error found!"});
  }

  return null;
});
