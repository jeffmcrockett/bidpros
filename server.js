const express = require("express");
const connectDB = require("./config/db");
const app = express();

// Serve static assets from the /public folder
connectDB();
app.use(express.json);
app.get("/", (req, res) => {
    res.send("Our API is connected")
})

// Endpoint to serve the configuration file
// app.get("/auth_config.json", (req, res) => {
//   res.sendFile(join(__dirname, "auth_config.json"));
// });

// Serve the index page for all other requests
app.get("/*", (_, res) => {
  res.sendFile(join(__dirname, "index.html"));
});

// Listen on port 4001
app.listen(4001, () => console.log("Application running on port 4001"));