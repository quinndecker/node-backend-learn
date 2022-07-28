//third party cors middleware Cross Origin Resource Sharing
//whitelist
const allowedOrigins = require("./allowedOrigins");
//options for allowedOrigins
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || /*remove after dev*/ !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS!"));
    }
  },
  optionsSuccessStatus: 200,
};

module.exports = corsOptions;
