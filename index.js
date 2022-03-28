const express = require("express");
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.post("/api/schedule-event", async (req, res) => {
  await setTimeout(() => {
    console.log(req.body.text, req.body.sleep);
    res.send("Event has been scheduled").status(200);
  }, req.body.sleep);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
