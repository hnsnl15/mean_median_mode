import express from "express";
import { getMedian } from "./median.controller.js";

const medianRoute = express.Router();

medianRoute.route("/api/median").get(getMedian);

export default medianRoute;
