console.log("Welcome To Zara's Site");

const policyButton = document.querySelector(".policybutton");
const inviteButton = document.querySelector("#invitebutton");
const homeButton = document.querySelector("#homebutton");

inviteButton.addEventListener("click", function () {
  window.location.href = "https://dsc.gg/zara-bot";
});

policyButton.addEventListener("click", function () {
  window.location.href = "/privacypolicy.html";
});

homeButton.addEventListener("click", function () {
  window.location.href = "/index.html";
});
