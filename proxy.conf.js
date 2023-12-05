const PROXY_CONFIG = {
  "/outerapi": {
    "target": "https://mlmcreatorsindia.com/outerapi",
    "secure": false,
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;
