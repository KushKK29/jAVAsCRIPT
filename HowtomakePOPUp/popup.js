document.addEventListener("DOMContentLoaded", function () {
  let btn1 = document.getElementById("submitt");
  let btn2 = document.getElementById("close");
  let popup = document.querySelector(".popup");

  btn1.addEventListener("click", () => {
    console.log("Submit button was clicked");
    openpopup();
  });
  btn2.addEventListener("click", () => {
    console.log("Mai mai close karta");
    closepopup();
  });

  function openpopup() {
    console.log("I am opened");
    popup.classList.add("open-popup");
    console.log("mai open hua");
  }
  function closepopup() {
    console.log("Hone ka call de raha");
    popup.classList.remove("open-popup");
  }
});
