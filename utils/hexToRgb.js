function hexToRgb(hex) {
  // Tests if the hex code is invalid (Optional # -symbol and 6 characters between 0 and F, upper/lowercase)
  if (!/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex code");
  }
  // Removes the # -symbol
  hex = hex.replace("#", "");

  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  return { r, g, b };
}

module.exports = hexToRgb;
