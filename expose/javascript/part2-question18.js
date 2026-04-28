function printTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// setInterval calls the printTime function every 1000 milliseconds (1 second)
setInterval(printTime, 1000);
