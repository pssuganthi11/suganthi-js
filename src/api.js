const profileEL = document.getElementById("profile");
const button = document.getElementById("searchBtn");
const usernameInput = document.getElementById("searchinput");

button.addEventListener("click", () => {
  const user = usernameInput.value.trim();
  console.log(user);
  profilefinder(user);
});
const profilefinder = async (user) => {
  try {
    const response = await fetch(`https://api.github.com/users/${user} `);
    if (!response.ok) throw new Error("User not found");

    const data = await response.json();
    displaydata(data);
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

function displaydata(user) {
  profileEL.innerHTML = `
<div  style="
  display: flex;
  gap: 20px;
  max-width: 900px;
  margin: 20px auto;
  font-family: Arial, sans-serif;
  color: #e5e7eb;
">

  <!-- LEFT: PROFILE CONTAINER -->
  <div style="
    width: 260px;
    background: #0f172a;
    border-radius: 14px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  ">
   <div style="
  display: flex;
  justify-content: center;
  margin-bottom: 14px;
">
  <img
    src="${user.avatar_url}"
    alt="Avatar"
    style="
      width: 120px;
      height: 120px;
      border-radius: 50%;
      object-fit: cover;
    "
  />
</div>

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

  <!-- RIGHT: DETAILS CONTAINER -->
  <div style="
    flex: 1;
    background: #020617;
    border-radius: 14px;
    padding: 20px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  ">

    <h3 style="margin-top: 0; font-size: 18px;">
      Profile Details :
    </h3>

    <!-- DETAILS GRID -->
    <div style="
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      font-size: 14px;
      margin-bottom: 20px;
    ">
      <div> <strong>Company:</strong> ${user.company ?? "N/A"}</div>
      <div> <strong>Joined:</strong> ${new Date(user.created_at).toDateString()}</div>
      <div> <strong>Repos:</strong> ${user.public_repos}</div>
      <div> <strong>Followers:</strong> ${user.followers}</div>
    </div>

    <!-- CHIPS -->
    <div style="
      display: flex;
      gap: 12px;
      flex-wrap: wrap; 
      margin-top:20px;
    ">
      <span style="
        background: #1e293b;
        padding: 8px 14px;
        border-radius: 999px;
        font-size: 14px;
      ">
         ${user.public_repos} Repositories
      </span>

      <span style="
        background: #1e293b;
        padding: 8px 14px;
        border-radius: 999px;
      ">
         ${user.followers} Followers
      </span>

      <span style="
        background: #1e293b;
        padding: 8px 14px;
        border-radius: 999px;
      ">
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
    margin-top: 16px;
    padding: 10px 0;
    background: #9333ea;
    color: white;
    text-decoration: none;
    border-radius: 10px;
    font-size: 15px;
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
