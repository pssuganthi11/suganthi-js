const textareaEL = document.getElementById("textarea");
const uppercaseEL = document.getElementById("uppercase");
const lowercaseEL = document.getElementById("lowercase");
const clearEL = document.getElementById("clear");

uppercaseEL.addEventListener("click", () => {
  const textarea = textareaEL.value;
  const uppercasetext = textarea.toUpperCase();
  textareaEL.value = uppercasetext;
  console.log(textarea);
  console.dir(textareaEL);
});

lowercaseEL.addEventListener("click", () => {
  const textarealower = textareaEL.value;
  const lowercasetext = textarealower.toLowerCase();
  textareaEL.value = lowercasetext;
  console.log(textarealower);
  
});

clearEL.addEventListener("click", () => {
  textareaEL.value = "";
  
});




