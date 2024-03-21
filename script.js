const launchDate = new Date("2024-04-20T00:00:00"); // Set your launch date here

const getTimeRemaining = (launchDate) => {
  const now = new Date();
  const timeLeft = launchDate - now;

  const seconds = Math.floor((timeLeft / 1000) % 60);
  const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
  const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds };
};

const updateCountdown = () => {
  const timeLeft = getTimeRemaining(launchDate);

  document.getElementById("days").innerHTML = timeLeft.days;
  document.getElementById("hours").innerHTML = timeLeft.hours.toString().padStart(2, '0');
  document.getElementById("minutes").innerHTML = timeLeft.minutes.toString().padStart(2, '0');
  document.getElementById("seconds").innerHTML = timeLeft.seconds.toString().padStart(2, '0');

  if (timeLeft.days <= 0 && timeLeft.hours <= 0 && timeLeft.minutes <= 0 && timeLeft.seconds <= 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "Launched!";
  }
};

const countdownInterval = setInterval(updateCountdown, 1000);

updateCountdown();
