const spantextEL = document.getElementById("spantext");
const reducecountbtnEL = document.getElementById("reducecountbtn");
const addcountbtnEL = document.getElementById("addcountbtn");
const divcontainerEL = document.getElementById("divcoontainer");

let count = 0;

function updateCount() {
  spantextEL.textContent = count;
  if (count <= 0) {
    spantextEL.style.backgroundColor = "red";
    spantextEL.style.border = "2px solid red";
  } else {
    spantextEL.style.backgroundColor = "green";
   spantextEL.style.border = "2px solid green";
  }
}

addcountbtnEL.addEventListener("click", () => {
  count++;
  updateCount();
});

reducecountbtnEL.addEventListener("click", () => {
  count--;
  updateCount();
});

// addcountbtnEL.addEventListener('click',counter);
// reducecountbtnEL.addEventListener('click',counter)
