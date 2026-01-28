const button = document.getElementById("searchBtn");
const profileDiv = document.getElementById("profile");
const errorDiv = document.getElementById("error");
const usernameInput = document.getElementById("username");

button.addEventListener("click", async () => {
  const username = usernameInput.value.trim();

  // show error 
  if (!username) {
    errorDiv.innerHTML = `<p style="color:red">Please enter a username</p>`;
    return;
  }

  // clear error 
  errorDiv.innerHTML = "";

  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    if (!res.ok) throw new Error("User not found");

    const user = await res.json();

    let profiles = JSON.parse(sessionStorage.getItem("profiles")) || [];

    if (profiles.some(p => p.login === user.login)) {
      alert("User already added");
      return;
    }

    profiles.push(user);
    sessionStorage.setItem("profiles", JSON.stringify(profiles));

    // append without dekete old cards
    profileDiv.innerHTML += createCard(user);

  } catch (err) {
    errorDiv.innerHTML = `<p style="color:red">${err.message}</p>`;
  }
});

function createCard(user) {
  return `
    <div class="bg-white/10 p-4 rounded-xl text-white text-center w-44 flex flex-col items-center gap-2">
      <img src="${user.avatar_url}" width="80" class="rounded-full" />

      <h3 class="font-semibold text-sm">
        ${user.name ?? user.login}
      </h3>

      <p class="text-xs text-gray-300">@${user.login}</p>

      <p class="text-xs"> Repos: ${user.public_repos}</p>
      <p class="text-xs">Followers: ${user.followers}</p>
      <p class="text-xs"> Following: ${user.following}</p>

      <a 
        href="${user.html_url}" 
        target="_blank"
        class="text-blue-400 text-xs hover:underline"
      >
        View on GitHub
      </a>
    </div>
  `;
}

