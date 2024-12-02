console.log("Welcome To Zara's Site");

const policyButton = document.querySelector(".policybutton");
const commandButton = document.querySelector("#commandsbutton");
const homeButton = document.querySelector("#homebutton");
const inviteButton = document.querySelector(".invitebutton");
const supportButton = document.querySelector(".supportbutton");

commandButton.addEventListener("click", function () {
  window.location.href = "https://therealshreyash.github.io/zara-site/commands.html";
});

policyButton.addEventListener("click", function () {
  window.location.href = "https://therealshreyash.github.io/zara-site/policy.html";
});

homeButton.addEventListener("click", function () {
  window.location.href = "https://therealshreyash.github.io/zara-site/index.html";
});

inviteButton.addEventListener("click", function () {
  window.location.href = "https://dsc.gg/zara-bot";
});
supportButton.addEventListener("click", function () {
  window.location.href = "https://discord.gg/q4fZeFw4XF";
});
