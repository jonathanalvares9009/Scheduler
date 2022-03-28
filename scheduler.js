const schedule = require("node-schedule");

class Scheduler {
  constructor(dateTime, text) {
    const job = schedule.scheduleJob(dateTime, function () {
      // Reverse text
      const reversedText = text.split("").reverse().join("");

      console.log(reversedText);
    });
  }
}

module.exports = Scheduler;
