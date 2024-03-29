const EventEmitter = require("node:events");

const eventEmitter = new EventEmitter();

eventEmitter.on("start", (start, end) => {
  console.log("started..event emitted", `${start} -- ${end}`);
});
eventEmitter.emit("start", 1, 100);
