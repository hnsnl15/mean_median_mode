import asyncHandler from "express-async-handler";

export const healthcheck = asyncHandler((req, res) => {
  try {
    res.status(200);
  } catch (error) {
    res.status(400);
  }

  return null;
});
