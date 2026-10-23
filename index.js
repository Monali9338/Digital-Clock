
function updateClock() {

    // Get the current date and time
    const now = new Date();

    // Get hours, minutes and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Set AM or PM
    let period = hours >= 12 ? "PM" : "AM";

    // Convert 24-hour time into 12-hour time
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;

    // Add zero before single-digit numbers
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    // Display time
    document.getElementById("time").textContent =
        `${hours}:${minutes}:${seconds} ${period}`;

    // Get current day, month and year
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    // Display date
    document.getElementById("date").textContent =
        now.toLocaleDateString("en-IN", options);
}

// Update clock immediately
updateClock();

// Update clock every second
setInterval(updateClock, 1000);
