const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let intervalId;

  return (seconds) => {
    clearInterval(intervalId);

    let remainingTime = seconds;
    const updateTimer = () => {
      if (remainingTime <= 0) {
        clearInterval(intervalId);
        timerEl.textContent = "00:00:00";
        return;
      }

      const hours = Math.floor(remainingTime / 3600);
      const minutes = Math.floor((remainingTime % 3600) / 60);
      const secs = remainingTime % 60;

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
      timerEl.textContent = formattedTime;

      remainingTime--;
    };

    updateTimer();
    intervalId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/\D/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
