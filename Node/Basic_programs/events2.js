const EventEmitter = require("events");
const server = new EventEmitter();

// Listen for "request" event
server.on("request", (r) => {
    console.log(`URL requested: ${r.url}`);
    if (r.url === "/error") {
        server.emit("error", new Error("An Error Occurred"));
    } else {
        console.log(`Processing request for ${r.url}`);
    }
});

// Listen for "error" event to handle any errors
server.on("error", (error) => {
    console.error(`Error: ${error.message}`);
});

// Emit "request" events with different URLs
server.emit("request", { url: "/home" });
server.emit("request", { url: "/about" });
server.emit("request", { url: "/error" });
