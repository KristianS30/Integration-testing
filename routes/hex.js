const express = require("express");
const hexToRgb = require("../utils/hexToRgb");

const router = express.Router();

// Receives the hex value from the URL
router.get("/hex-to-rgb/:hex", (req, res) => {
  try {
    // Runs hex value through the hex->rgb converter
    const rgb = hexToRgb(req.params.hex);

    // Sends success and rgb value as response
    res.json({ success: true, rgb });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
});

module.exports = router;
