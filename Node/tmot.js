const intervalId = setInterval(() => {
    console.log("Running");
}, 2000);

setTimeout(() => {
    clearInterval(intervalId);
}, 3000);
