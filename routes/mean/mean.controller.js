import asyncHandler from "express-async-handler";

import {mean} from "../../mean-median-mode.js";
import isNumber from "../../middleware/only-number.js";

export const getMean = asyncHandler(async (req, res) => {
  try {
    const {arr} = req.body;

    if (!arr) {
      res.status(400).json({message: "No input found."});
      return null;
    }

    if (arr.length < 3) {
      res.status(401).json({message: "A list should be 3 and above."});
      return null;
    }

    if (!isNumber(arr)) {
      res.status(401).json({message: "The list should contain only numbers."});
      return null;
    }

    const result = mean(arr);

    res.status(200).json({result});
  } catch (error) {
    res.status(400).json({error});
  }
});
