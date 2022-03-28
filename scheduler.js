const { default: axios } = require("axios");
const schedule = require("node-schedule");

class Scheduler {
  constructor(dateTime, text) {
    const job = schedule.scheduleJob(dateTime, function () {
      // Reverse text
      const reversedText = text.split("").reverse().join("");
      axios
        .post("http://localhost:5000/api/schedule-event", {
          text: reversedText,
          sleep: reversedText.length * 1000,
        })
        .then(() => {
          console.log("Event has been scheduled");
        });
    });
  }
}

module.exports = Scheduler;
