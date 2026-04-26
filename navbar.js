document.addEventListener("DOMContentLoaded", () => {
  const authContainer = document.getElementById("authButtons");

  const CURRENT_USER_KEY = "personaplay_current_user";
  const user = JSON.parse(localStorage.getItem(CURRENT_USER_KEY));

  if (!authContainer) return;

  if (user) {
    // Logged in state
    authContainer.innerHTML = `
      <span class="user-name">Hi, ${user.name}</span>
      <button id="logoutBtn" class="btn logout">Logout</button>
    `;

    const logoutBtn = document.getElementById("logoutBtn");

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem(CURRENT_USER_KEY);
      window.location.href = "index.html";
    });

  } else {
    // Logged out state
    authContainer.innerHTML = `
      <a href="auth.html?mode=signin" class="btn login">Log In</a>
      <a href="auth.html?mode=signup" class="btn signup">Sign Up</a>
    `;
  }
});
