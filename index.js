const express = require("express");
const app = express();

const runScript = require("./script");

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/index.html");
});

app.post("/api/schedule-events", async (req, res) => {
  const schedules = req.body;
  if (schedules.length !== 10) {
    res.status(400).send("Accepts 10 events at a time");
  } else {
    runScript(schedules);
    res.send("Events have been scheduled").status(200);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
