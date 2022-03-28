const express = require("express");
const app = express();

const Scheduler = require("./scheduler");

const PORT = process.env.PORT || 5000;

app.post("/api/schedule-events", async (req, res) => {
  const date = new Date("Mar 28 2022 13:58:30 GMT+0530 (IST)");
  new Scheduler(date, "The answer to life, the universe, and everything!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
