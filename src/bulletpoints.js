const foodinputEL = document.getElementById("foodinput");
const addbtnEL = document.getElementById("addbtn");
const cancelbtnEL = document.getElementById("cancelbtn");
const foodListEL = document.getElementById("foodList");

addbtnEL.addEventListener("click", () => {
  console.log(foodinputEL.value);
});

function addfoods() {
  const foodName = foodinputEL.value.trim();
  if (foodName === "") return;
// console.log(foodName)
  const li = document.createElement("li");
  li.className =
    "bg-orange-50 p-3 rounded-lg shadow flex justify-between items-center";

  const span = document.createElement("span");
  span.textContent = `🍽️ ${foodName}`;
//   console.log(span);
  const removeBtn = document.createElement("button");
  removeBtn.className =
    "text-red-500 hover:text-red-600 text-sm cursor-pointer";
  removeBtn.textContent = "Remove";

  removeBtn.addEventListener("click", () => {
    // alert("hello im cancelled");
    li.remove();
  });
  // console.log(removeBtn)
  li.appendChild(span);
  li.appendChild(removeBtn);
  foodListEL.appendChild(li);
  foodinputEL.value = "";
}

foodinputEL.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addfoods();
  }
});

addbtnEL.addEventListener("click", addfoods);

cancelbtnEL.addEventListener("click", () => {
  foodinputEL.value = "";
});
