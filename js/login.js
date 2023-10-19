import { userData } from "../data/data.js";

// console.log(userData);
const btnLoginElm = document.querySelector("#btn_login");

function onLogin() {
  const userElm = document.querySelector("#username").value;
  const PassElm = document.querySelector("#password").value;

  const users = userData.find(
    (user) => user.username == userElm && user.password == PassElm
  );

  if (users) {
    localStorage.setItem("user", JSON.stringify(users));
    window.location.href = "home.html";
  } else {
    alert("password dan username salah");
  }

  console.log(users);
}

btnLoginElm.addEventListener("click", () => {
  onLogin();
});
//1 Function onLogin
//2 getvalue user name , password
//3 match username password , dengan data yang ada
//4 masukin data ke localstorage
//5. arahin page ke halaman home
