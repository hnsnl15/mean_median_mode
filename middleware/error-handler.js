import express from "express";

const app = express();
const errorHandler = () =>
  app.use((error, req, res, next) => {
    console.log("Error Handling Middleware called");
    console.log("Path: ", req.path);
    console.error("Error: ", error);

    if (error.type == "redirect") res.redirect("/error");
    else if (error.type == "time-out")
      // arbitrary condition check
      res.status(408).send(error);
    else res.status(500).send(error);

    next();
  });

export default errorHandler;
