"use strict";
const path = require("path");
const output = {
  library: "base32",
  libraryTarget: "this",
  path: path.resolve(__dirname, "dist/"),
};
const entry = {base32: './base32.js'};
const devtool = "source-map";
const node = { Buffer: false };

/**
 * Webpack configuration.
 */
exports = module.exports = [
  {
    mode: "development",
    entry,
    devtool,
    output,
    node,
  },
  {
    mode: "production",
    entry,
    devtool,
    output: {
      ...output,
      filename: '[name].min.js',
    },
    node,
  }
];
