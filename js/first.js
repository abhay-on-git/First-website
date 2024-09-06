const video = document.getElementById('myVideo');

video.plabackRate = 1.5;

video.addEventListener('ended', () => {
  video.play();
});

document.addEventListener('DOMContentLoaded', () => {
  video.play();
});

// Time Updation Task

const year = document.getElementById("years")
const thisyear = new Date().getFullYear()
year.textContent = thisyear
