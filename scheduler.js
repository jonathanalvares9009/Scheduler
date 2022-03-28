const schedule = require("node-schedule");

class Scheduler {
  constructor(dateTime, text) {
    const job = schedule.scheduleJob(dateTime, function () {
      console.log(text);
    });
  }
}

module.exports = Scheduler;
