const textareaEl = document.getElementById("textarea");
const countresult = document.getElementById("countresult");
const errorEL = document.getElementById("error");
const resetEL = document.querySelector("button");

let count = 200;

textareaEl.addEventListener("input", () => {
  // console.log(textareaEl.value);
  const remainchar = count - textareaEl.value.length;
  // countresult.textContent = `${textareaEl.value.length} - ${count}charcter`;
  countresult.textContent = `${remainchar} - ${count} Character`;

  if (textareaEl.value.length > 200) {
    countresult.textContent = `0/${count} Character`;
    textareaEl.style.border = "solid 1px red";
    // textareaEl.disabled = true;
    errorEL.classList.remove("hidden");
  } else {
    textareaEl.style.border = "solid 1px green";
    countresult.textContent = `${remainchar} - ${count} Character`;
    errorEL.classList.add("hidden");
  }
});

resetEL.addEventListener("click", () => {
  textareaEl.value = "";
  errorEL.classList.add("hidden");
  textareaEl.style.border = "";
  countresult.textContent = " 0/ max 200 character";
  //  textareaEl.disabled = false;
});

console.log(resetEL);
