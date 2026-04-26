document.addEventListener("DOMContentLoaded", () => {
  const signinTab = document.getElementById("signinTab");
  const signupTab = document.getElementById("signupTab");

  const signinForm = document.getElementById("signinForm");
  const signupForm = document.getElementById("signupForm");

  const signinMessage = document.getElementById("signinMessage");
  const signupMessage = document.getElementById("signupMessage");

  const signinEmail = document.getElementById("signinEmail");
  const signinPassword = document.getElementById("signinPassword");

  const signupName = document.getElementById("signupName");
  const signupEmail = document.getElementById("signupEmail");
  const signupPassword = document.getElementById("signupPassword");

  const USERS_KEY = "personaplay_users";
  const CURRENT_USER_KEY = "personaplay_current_user";

  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");

  if (mode === "signup") {
    showSignup();
  } else {
    showSignin();
  }

  function getUsers() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  }

  function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  function setMessage(el, text, type) {
    el.textContent = text;
    el.className = `auth-message ${type || ""}`.trim();
  }

  function showSignin() {
    signinTab.classList.add("active");
    signupTab.classList.remove("active");
    signinForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    setMessage(signinMessage, "", "");
    setMessage(signupMessage, "", "");
  }

  function showSignup() {
    signupTab.classList.add("active");
    signinTab.classList.remove("active");
    signupForm.classList.remove("hidden");
    signinForm.classList.add("hidden");
    setMessage(signinMessage, "", "");
    setMessage(signupMessage, "", "");
  }

  signinTab.addEventListener("click", showSignin);
  signupTab.addEventListener("click", showSignup);

  signinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = signinEmail.value.trim().toLowerCase();
    const password = signinPassword.value;

    const users = getUsers();
    const user = users.find(
      (u) => u.email.toLowerCase() === email && u.password === password
    );

    if (!user) {
      setMessage(signinMessage, "Invalid email or password.", "error");
      return;
    }

    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify({ name: user.name, email: user.email })
    );

    setMessage(signinMessage, "Sign in successful. Redirecting...", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  });

  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = signupName.value.trim();
    const email = signupEmail.value.trim().toLowerCase();
    const password = signupPassword.value;

    if (password.length < 4) {
      setMessage(signupMessage, "Password must be at least 4 characters.", "error");
      return;
    }

    const users = getUsers();
    const exists = users.some((u) => u.email.toLowerCase() === email);

    if (exists) {
      setMessage(signupMessage, "This email is already registered.", "error");
      return;
    }

    users.push({ name, email, password });
    saveUsers(users);

    localStorage.setItem(
      CURRENT_USER_KEY,
      JSON.stringify({ name, email })
    );

    setMessage(signupMessage, "Account created successfully. Redirecting...", "success");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 700);
  });
});
