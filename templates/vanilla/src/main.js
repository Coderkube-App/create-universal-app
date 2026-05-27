// Simple interactive counter logic
const setupCounter = (element) => {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
};

document.addEventListener('DOMContentLoaded', () => {
  const counterButton = document.querySelector('#counter');
  if (counterButton) {
    setupCounter(counterButton);
  }
});
