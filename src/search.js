const searchinputEL = document.querySelector("#searchinput");
const listItems = document.querySelectorAll("#ul li");
const noEL = document.getElementById("no");
const divcon = document.getElementById("divcon");

searchinputEL.addEventListener("keyup", () => {
  const searchvalue = searchinputEL.value.toLowerCase();

  listItems.forEach((item) => {
    const text = item.textContent.toLowerCase();

    if (text.includes(searchvalue)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }

    if (text != searchvalue) {
      noEL.classList.remove("hidden");
      divcon.classList.add("hidden");
    } else {
      noEL.classList.add("hidden");
    }
    if (searchvalue == "") {
      divcon.classList.remove("hidden");
            noEL.classList.add("hidden");

    }
  });
});
