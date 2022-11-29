import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import errorHandler from "./middleware/error-handler.js";

import meanRoute from "./routes/mean/mean.route.js";
import medianRoute from "./routes/median/median.route.js";
import modeRoute from "./routes/mode/mode.route.js";
import healthRoute from "./routes/health/health.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
  res.status(200).json({message: "API is running."});
});

app.use("/", meanRoute);
app.use("/", medianRoute);
app.use("/", modeRoute);
app.use("/", healthRoute);

app.use(errorHandler);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}.`);
});
