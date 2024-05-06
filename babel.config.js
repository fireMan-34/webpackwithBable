const babelConfig = {
  "presets": [
    ["@babel/preset-env",
      {
        "useBuiltIns": "entry",
        "corejs": "3.22",
      }
    ]
  ]
};

module.exports = babelConfig;