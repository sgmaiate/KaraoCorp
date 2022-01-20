const submitButton = document.getElementsByClassName("sub-button");
const nameInput = document.getElementsByClassName("two-form");
const emailInput = document.getElementsByClassName("one-form");
const birthday = document.getElementsByClassName("birth-date")[0];
const todayDate = new Date();
const todayYear = todayDate.getFullYear();
const firstName = nameInput[0].children[0];
const lastName = nameInput[0].children[1];
const telephone = nameInput[1].children[0];
const password = nameInput[1].children[1];
const email = emailInput[0].children[0];
const verification = document.getElementsByClassName("result");
const registerPage = document.getElementById("register");
const createAccount = (event) => {
  event.preventDefault();
  console.log();

  let complete = 6;
  if (firstName.value.length == 0) {
    complete--;
  }
  if (lastName.value.length == 0) {
    complete--;
  }
  if (telephone.value.length != 11) {
    complete--;
  }
  if (password.value.length < 8) {
    complete--;
  }
  if (email.value.length < 4) {
    complete--;
  }
  if (todayYear - birthday.value.split("-")[0] < 18) {
    complete--;
  }
  if (complete == 6) {
    verification[0].classList.remove("failed");
    verification[0].innerHTML = "Conta Criada!";
    verification[0].style.color = "green";
  } else {
    verification[0].classList.remove("success");
    verification[0].innerHTML = "Preencha todos os Campos!";
    verification[0].style.color = "red";
  }
  //    alert("Conta Criada!");
};
function closeWindow() {
  registerPage.style.visibility = "hidden";
}
function openWindow() {
  registerPage.style.visibility = "visible";
}
submitButton[0].addEventListener("click", createAccount);
console.log(registerPage);
