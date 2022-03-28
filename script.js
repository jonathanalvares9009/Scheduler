const Scheduler = require("./scheduler");

const runEvents = (schedules) => {
  for (let i = 0; i < schedules.length; i++) {
    const dateTime = new Date(schedules[i].dateTime);
    if (dateTime < new Date()) {
      console.log("Event is in the past");
    } else {
      new Scheduler(dateTime, schedules[i].text);
      console.log("Event will be scheduled");
    }
  }
  console.log("Script has been executed");
};

const schedules = [
  {
    text: "Jonawgwhkuhehehuthan",
    dateTime: "Mar 28 2022 17:55:00 GMT+0530 (IST)",
  },
  {
    text: "nnrfejjher",
    dateTime: "Mar 28 2022 17:51:30 GMT+0530 (IST)",
  },
  {
    text: "okeiirij4i",
    dateTime: "Mar 28 2022 17:52:00 GMT+0530 (IST)",
  },
];

runEvents(schedules);
