const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const cardcontainerEl = document.querySelector(".cardcontainer");

const submitbtnEl = document.querySelector("button");

submitbtnEl.addEventListener("click", (e) => {
  e.preventDefault();

  const namevalEl = nameEl.value;
  const rolevalEl = roleEl.value;

  // console.log(nameEl,roleEl)

  const fragment = document.createDocumentFragment();

  const card = document.createElement("div");
  card.className = "usermanagercard";

  const name = document.createElement("h3");
  name.textContent = namevalEl;

  const role = document.createElement("p");
  role.textContent = rolevalEl;

  // console.log(namevalEl,rolevalEl)
  // console.log(nameEl.value, roleEl.value);
  if (rolevalEl.toLowerCase() === "developer") {
    card.classList.add ("usermaagerdeveloper") ;
  }

  if (!namevalEl || !rolevalEl) {
    alert("Please fill all fields");

    return;
  }

  const deleteel = document.createElement("button");
  deleteel.textContent = "✖️";
  deleteel.className = "usermanagerdeletebutton";
  deleteel.addEventListener("click", () => {
    card.remove();
  });

  card.append(name, role, deleteel);
  // console.log(name,role)

  fragment.appendChild(card);
  // console.log(fragment)

  cardcontainerEl.appendChild(fragment);
});
