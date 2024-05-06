const babelConfig = {
  "presets": [
    ["@babel/preset-env",
      {
        "useBuiltIns": "usage",
        "corejs": "3.8",
        "shippedProposals": true,
      }
    ]
  ],
};

module.exports = babelConfig;