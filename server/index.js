require("dotenv").config();
const express = require("express");
const cors = require("cors");

const iyyanAlliRoute = require("./routes/iyyanalli-route");

const app = express();
const PORT = process.env.PORT;

// ===== PROFESSIONAL CORS HANDLING =====
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:5173", // Development frontend
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        console.log("Blocked Origin:", origin);
        return callback(new Error("CORS blocked: Unauthorized origin"), false);
      }
    },
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());

app.use("/api/iyyanalli", iyyanAlliRoute);

// Root Check
app.get("/", (req, res) =>
  res.send("🚀 Server Iyyanalli Running successfully!"),
);

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Iyyanalli server running on port ${PORT}`),
);
