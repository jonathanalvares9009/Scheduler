const Scheduler = require("./scheduler");

const runEvents = (schedules) => {
  let schedulerArray = [];
  for (let i = 0; i < schedules.length; i++) {
    const dateTime = new Date(schedules[i].dateTime).getTime() + 7 * 1000;
    schedulerArray[i] = new Scheduler(dateTime, schedules[i].text);
  }
};

module.exports = runEvents;
