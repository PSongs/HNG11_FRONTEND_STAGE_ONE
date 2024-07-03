function updateDateTime() {
    const currentTimeUTCElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');

    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; // Get the time part of the UTC string
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = days[now.getUTCDay()]; // Get the day of the week in UTC

    currentTimeUTCElement.textContent = utcTime;
    currentDayElement.textContent = currentDay;
}

// Update the time and day immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);