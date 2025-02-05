// Import modules
import express from "express";
import cors from "cors";
import router from "./router/router.js";

// Create server
const server = express();

// PORT
const PORT = process.env.PORT || 5000;

// * Middlewares

// CORS - Cross Origin Resource Sharing
server.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

// Body parsing
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

// Routes
server.use("/api", router);

// Server response

// server.get("/", (req, res) => {
//   return res.json({
//     message: `SayHi server is running at http://localhost:${PORT}`,
//   });
// });

server.get("/", (req, res) => {
  return res.send(`
    <div 
      style=
        "color:red;
        display:flex;
        justify-content:center;
        align-items:center;
        width:100%;
        height:100%;
      ">
      <h1>SayHi server is running!</h1>
    </div>`);
});

// Listen to server
server.listen(PORT, (error) => {
  if (error) {
    console.log({ error: "An error occurred while creating server!" });
    return;
  }
  console.log(`SayHi server is running at http://localhost:${PORT}`);
});
