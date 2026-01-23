const searchinputEL = document.querySelector("#searchinput");
const listItems = document.querySelectorAll("#ul li");
const noEL = document.getElementById("no");
const divcon = document.getElementById("divcon");

searchinputEL.addEventListener("keyup", () => {
  const searchvalue = searchinputEL.value.toLowerCase();

  if (searchvalue === "") {
    listItems.forEach(item => {
      item.style.display = "block";
    });
    noEL.classList.add("hidden");
    divcon.classList.remove("hidden");
    return;
  }
   listItems.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(searchvalue) ? "block" : "none";
  });
  const hasMatch = [...listItems].some(
    item => item.style.display !== "none"
  );

  if (!hasMatch) {
    noEL.classList.remove("hidden");
    divcon.classList.add("hidden");
  } else {
    noEL.classList.add("hidden");
    divcon.classList.remove("hidden");
  }
});
