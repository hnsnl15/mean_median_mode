import asyncHandler from "express-async-handler";
import { mode } from "../../mean-median-mode.js";
import isNumber from "../../middleware/only-number.js";

export const getMode = asyncHandler(async (req, res) => {
  try {
    const { arr } = req.body;

    if (arr.length < 3) {
      res.status(401).json({ message: "A list should be 3 and above." });
      return null;
    }

    if (!isNumber(arr)) {
      res
        .status(401)
        .json({ message: "The list should contain only numbers." });
      return null;
    }

    const result = mode(arr);

    res.status(200).json({ result });
  } catch (error) {
    res.status(400).json({ error });
  }
});
