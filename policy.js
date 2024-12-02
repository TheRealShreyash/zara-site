const commandButton = document.querySelector("#commandsbutton");
const homeButton = document.querySelector("#homebutton");
const inviteButton = document.querySelector(".invitebutton");

homeButton.addEventListener("click", function () {
  window.location.href = "index.html";
});

inviteButton.addEventListener("click", function () {
  window.location.href = "https://dsc.gg/zara-bot";
});

commandButton.addEventListener("click", function () {
  window.location.href = "commands.html";
});
