import express from "express";
import { getMode } from "./mode.controller.js";

const modeRoute = express.Router();

modeRoute.route("/api/mode", getMode).post(getMode);

export default modeRoute;
