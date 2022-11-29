import express from "express";
import { getMedian } from "./median.controller.js";

const medianRoute = express.Router();

medianRoute.route("/api/median").post(getMedian);

export default medianRoute;
