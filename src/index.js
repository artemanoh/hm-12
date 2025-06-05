class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timerElement = document.querySelector(selector);
    this.daysElement = this.timerElement.querySelector('[data-value="days"]');
    this.hoursElement = this.timerElement.querySelector('[data-value="hours"]');
    this.minutesElement = this.timerElement.querySelector('[data-value="mins"]');
    this.secondsElement = this.timerElement.querySelector('[data-value="secs"]');
    this.start();
  }

  start() {
    this.update();
    this.intervalId = setInterval(() => this.update(), 1000);
  }

  update() {
    const now = new Date();
    const time = this.targetDate - now;

    if (time <= 0) {
      clearInterval(this.intervalId);
      this.daysElement.textContent = "0";
      this.hoursElement.textContent = "00";
      this.minutesElement.textContent = "00";
      this.secondsElement.textContent = "00";
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);

    this.daysElement.textContent = days;
    this.hoursElement.textContent = String(hours).padStart(2, "0");
    this.minutesElement.textContent = String(minutes).padStart(2, "0");
    this.secondsElement.textContent = String(seconds).padStart(2, "0");
  }
}

new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});
