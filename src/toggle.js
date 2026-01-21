const themeEl = document.querySelector('input[type="checkbox"]');
const cardcontainerEl = document.getElementById("cardcontainer");
const trackercolorEL = document.getElementById('trackercolor')
const cardbtn = document.getElementById("btn");
themeEl.addEventListener("change", (e) => {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    console.log("dark mode");
    cardcontainerEl.classList.add("graymode");
    cardcontainerEl.style.color = "white";
    cardbtn.style.backgroundColor = "black";
    trackercolorEL.style.backgroundColor = "#45abb0"
  } else {
    console.log("light mode");  
    cardcontainerEl.classList.remove("graymode");
    cardbtn.style.backgroundColor = "orange";
    cardcontainerEl.style.color = "black";
    trackercolorEL.style.backgroundColor = "#d1d5dc"
  }
});
console.log(themeEl);
