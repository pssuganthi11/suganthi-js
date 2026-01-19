const spantextEL = document.getElementById("spantext");
const reducecountbtnEL = document.getElementById("reducecountbtn");
const addcountbtnEL = document.getElementById("addcountbtn");
const divcontainerEL = document.getElementById("divcoontainer");

let count = 0;

function updateCount() {
  spantextEL.textContent = count;
  if (count <= 0) {
    divcontainerEL.style.borderColor = "red";
    divcontainerEL.style.border = "2px solid red";
    divcontainerEL.style.boxShadow = "10px 0 10px red";
  } else {
    divcontainerEL.style.borderColor = "green";
   divcontainerEL.style.border = "2px solid green";
    divcontainerEL.style.boxShadow = "10px 0 10px green";
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
