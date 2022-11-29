import asyncHandler from "express-async-handler";

export const healthcheck = asyncHandler((req, res) => {
  try {
    res.status(200).send("Ok");
  } catch (error) {
    res.status(400).send("Error");
  }

  return null;
});
