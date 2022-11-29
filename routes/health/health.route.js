import express from "express";
import {healthcheck} from "./health.controller.js";

const healthRoute = express.Router();

healthRoute.route("/health").get(healthcheck);

export default healthRoute;
