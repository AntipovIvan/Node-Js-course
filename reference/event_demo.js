const EventEmitter = require("events");

// Create class
class MyEmitter extends EventEmitter {}

// Init object
const myEmitter = new MyEmitter();

// Evet listener
myEmitter.on("event", () => console.log("Event fired!"));

// Init event
myEmitter.emit("event");
