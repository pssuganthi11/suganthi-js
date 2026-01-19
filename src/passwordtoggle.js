const passwordInput = document.getElementById("password");
const iconDiv = document.getElementById("icon");

const icon = document.createElement("img");
icon.src = "/public/SolarLockPasswordBroken.png";
icon.alt = "toggle password";
icon.className = "w-6 h-6 opacity-80 hover:opacity-100 transition";

iconDiv.appendChild(icon);

iconDiv.addEventListener("click", () => {
  const isHidden = passwordInput.type === "password";

  passwordInput.type = isHidden ? "text" : "password";

  icon.src = isHidden
    ? "/public/SolarLockPasswordOutline.png" 
    : "/public/SolarLockPasswordBroken.png";
});
