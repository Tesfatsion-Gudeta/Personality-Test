const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:5173", // Adjust if needed
  credentials: true,
};

module.exports = cors(corsOptions);
