const firstNameEl = document.getElementById("firstName");
const text = firstNameEl.textContent;

// console.log(text);

firstNameEl.addEventListener("mouseenter", () => {
  firstNameEl.style.color = "red";
  firstNameEl.style.cursor = "pointer";
});
firstNameEl.addEventListener("mouseleave", () => {
  firstNameEl.style.color = "black";
});

// const qualificationEl = document.getElementsByTagName("select");

// qualificationEl.addEventListener('mouseenter',()=>{
//         qualificationEl.style.cursor = "pointer";

// })

const qualificationEl = document.getElementById("qualification");

qualificationEl.addEventListener("change", () => {
  const selectEl = qualificationEl.options[qualificationEl.selectedIndex];

  if (selectEl.value === "UG") {
    selectEl.value = "UnderGraduate";
    selectEl.text = "UnderGraduate";
  }
  if (selectEl.value === "PG") {
    selectEl.value = "PostGraduate";
    selectEl.text = "PostGraduate";
  }
  console.log(selectEl.value, "qualificationEl");
});

// geting form data

const firstnameEl = document.getElementById("firstname");
const lastnameEl = document.getElementById("lastname");
const numberEl = document.getElementById("number");
const emailEl = document.getElementById("email");
const qualificationsEl = document.getElementById("qualification");
const joineeEl = document.getElementById("joinee");

// button and display div elements

const submitBtn = document.getElementById("submitBtn");
const resultEl = document.getElementById("result");
const outputEl = document.getElementById("output");

//submit functionality

submitBtn.addEventListener("click", (e) => {
 

  // clear previous errors
  document.getElementById("firstNameError").textContent = "";
  document.getElementById("lastNameError").textContent = "";
  document.getElementById("numberError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("qualificationError").textContent = "";
  document.getElementById("joineeError").textContent = "";

  let isValid = true;

  // First Name
  const nameRegex = /^[A-Za-z]{4,}$/;

  if (!nameRegex.test(firstnameEl.value.trim())) {
    document.getElementById("firstNameError").textContent =
      "First name must contain only letters and be at least 4 characters long";
    isValid = false;
  }

  // Last Name
  const lastnameRegex = /^[A-Za-z]/;
  if (!lastnameRegex.test(lastnameEl.value.trim())) {
    document.getElementById("lastNameError").textContent =
      "last name must contain only letters ";
    isValid = false;
  }

  const phone = numberEl.value.replace(/\s+/g, "");

  function isValidPhoneNumber(phone) {
    // only digits
    if (!/^[0-9]{8,15}$/.test(phone)) return false;

    // reject all same digits (0000000000, 1111111111)
    if (/^([0-9])\1+$/.test(phone)) return false;

    // reject numbers with too many zeros (5)
    if (/^0{5,}/.test(phone)) return false;

    return true;
  }

  // Contact Number

  if (!isValidPhoneNumber(phone)) {
    document.getElementById("numberError").textContent =
      "Enter a valid contact number";
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailEl.value.trim())) {
    document.getElementById("emailError").textContent =
      "Enter a valid email address";
    isValid = false;
  }

  // Qualification
  if (qualificationsEl.selectedIndex === 0) {
    document.getElementById("qualificationError").textContent =
      "Please select your qualification";
    isValid = false;
  }

  // Immediate Joinee
  const joinee = document.querySelector(
    'input[name="Immediatejoinee"]:checked'
  );

  if (!joinee) {
    document.getElementById("joineeError").textContent =
      "Please select Yes or No";
    isValid = false;
  }

  if (!isValid) return;

  resultEl.innerHTML = `
  <div class="flex justify-between py-2"><span class="font-semibold">First Name:</span><span>${firstnameEl.value}</span></div>
  <div class="flex justify-between py-2"><span class="font-semibold">Last Name:</span><span>${lastnameEl.value}</span></div>
  <div class="flex justify-between py-2"><span class="font-semibold">Contact:</span><span>${numberEl.value}</span></div>
  <div class="flex justify-between py-2"><span class="font-semibold">Email:</span><span>${emailEl.value}</span></div>
  <div class="flex justify-between py-2"><span class="font-semibold">Qualification:</span><span>${qualificationsEl.value}</span></div>
  <div class="flex justify-between py-2"><span class="font-semibold">Immediate Joinee:</span><span>${joinee.value}</span></div>
`;

  outputEl.classList.remove("hidden");
});
