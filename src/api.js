const profileEL = document.getElementById("profile");
const button = document.getElementById("searchBtn");
const usernameInput = document.getElementById("searchinput");
const errorEL = document.getElementById("error");

button.addEventListener("click", () => {
  const user = usernameInput.value.trim();

  if (!user) {
    showError("Please enter a GitHub username");
    return;
  }

  profilefinder(user);
});

const profilefinder = async (user) => {
  try {
    errorEL.innerHTML = "";
    profileEL.innerHTML = "";

    const response = await fetch(`https://api.github.com/users/${user}`);

    if (!response.ok) {
      throw new Error("User not found");
    }

    const data = await response.json();
    displaydata(data);

  } catch (error) {
    showError(" User not found");
  }
};

function showError(message) {
  profileEL.innerHTML = "";
  errorEL.innerHTML = `
    <p style="color: red; font-weight: 600; text-align: center;">
      ${message}
    </p>
  `;
}

function displaydata(user) {
  profileEL.innerHTML = `
  <div style="
    display: flex;
    gap: 20px;
    max-width: 900px;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    color: #e5e7eb;
  ">

    <!-- LEFT -->
    <div style="
      width: 260px;
      background: #0f172a;
      border-radius: 14px;
      padding: 20px;
      text-align: center;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    ">
      <img
        src="${user.avatar_url}"
        alt="Avatar"
        style="
          width: 120px;
          height: 120px;
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 14px;
        "
      />

      <h2 style="margin: 12px 0 4px;">
        ${user.name ?? "No name available"}
      </h2>

      <p style="margin: 0; color: #94a3b8;">
        @${user.login}
      </p>

      <p style="margin-top: 10px; font-size: 14px;">
        ${user.bio ?? "No bio available"}
      </p>
    </div>

    <!-- RIGHT -->
    <div style="
      flex: 1;
      background: #020617;
      border-radius: 14px;
      padding: 20px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.3);
    ">
      <h3 style="margin-top: 0;">Profile Details</h3>

      <div style="
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
        font-size: 14px;
        margin-bottom: 20px;
      ">
        <div><strong>Company:</strong> ${user.company ?? "N/A"}</div>
        <div><strong>Joined:</strong> ${new Date(user.created_at).toDateString()}</div>
        <div><strong>Repos:</strong> ${user.public_repos}</div>
        <div><strong>Followers:</strong> ${user.followers}</div>
      </div>

      <div style="
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        margin-bottom: 16px;
      ">
        <span style="background:#1e293b; padding:8px 14px; border-radius:999px;">
          ${user.public_repos} Repositories
        </span>
        <span style="background:#1e293b; padding:8px 14px; border-radius:999px;">
          ${user.followers} Followers
        </span>
        <span style="background:#1e293b; padding:8px 14px; border-radius:999px;">
          ${user.following} Following
        </span>
      </div>

      <a
        href="${user.html_url}"
        target="_blank"
        rel="noopener noreferrer"
        style="
          display: block;
          width: 100%;
          padding: 10px 0;
          background: #9333ea;
          color: white;
          text-decoration: none;
          border-radius: 10px;
          font-weight: 600;
          text-align: center;
        "
      >
        View Profile
      </a>
    </div>
  </div>
  `;
}
