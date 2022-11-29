import express from "express";
import { getMean } from "./mean.controller.js";

const meanRoute = express.Router();

meanRoute.route("/api/mean").get(getMean);

export default meanRoute;
