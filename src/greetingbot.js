const textEl = document.getElementById("text");
const btnEl = document.querySelector("button");
const result = document.getElementById("result");
const inputdivEl = document.getElementById("inputdiv");
const errorEl = document.getElementById("error");

btnEl.addEventListener("click", () => {
  const message = document.createElement("h2");
  const inputvalue = textEl.value.trim();
  // console.log(inputvalue)

  result.innerText = "";

  if (!inputvalue) {
    errorEl.innerText = "Please enter text";
    errorEl.classList.remove("hidden");
    errorEl.style.color = "red";
    textEl.style.borderColor = "red";

    return;
  }
  const textregex = /^[a-zA-Z]+$/;

  if (!textregex.test(inputvalue)) {
    errorEl.innerText = "Please Enter characters only ";
    errorEl.classList.remove("hidden");
    errorEl.style.color = "red";
    textEl.style.borderColor = "red";

    return;
  }
  message.innerText =
    "Hello" +
    " " +
    inputvalue.charAt(0).toUpperCase() +
    inputvalue.slice(1) +
    " " +
    ",Welcome to cyberdude 😊";
  // console.log(message);
  result.append(message);
  result.classList.remove("hidden");
  inputdivEl.classList.add("hidden");

  //back button

  const backdiv = document.createElement("div");
  const backbtnEl = document.createElement("button");
  backbtnEl.innerText = "<- Back";
  backdiv.classList.add("greetbackdiv");
  document.body.appendChild(backdiv);
  backbtnEl.classList.add("greetbackbtn");
  backdiv.appendChild(backbtnEl);
  //back
  backbtnEl.addEventListener("click", () => {
    result.classList.add("hidden");
    inputdivEl.classList.remove("hidden");
    backdiv.classList.add("hidden");
  });
});

// console.log(textEl);
// console.log(btnEl);
