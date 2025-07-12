let isSignup = false;

// Show modal on page load
window.onload = () => {
  document.getElementById("loginOverlay").style.display = "flex";
};

// Toggle between Login <-> Signup
function toggleForm() {
  isSignup = !isSignup;

  const formTitle = document.getElementById("formTitle");
  const usernameField = document.getElementById("username");
  const toggleText = document.getElementById("toggleText");

  if (isSignup) {
    formTitle.innerText = "Sign Up";
    usernameField.classList.remove("hidden");
    toggleText.innerHTML = `Already have an account? <a onclick="toggleForm()">Login</a>`;
  } else {
    formTitle.innerText = "Login";
    usernameField.classList.add("hidden");
    toggleText.innerHTML = `New here? <a onclick="toggleForm()">Create Account</a>`;
  }
}

// Form Submit Logic
function submitAuth() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const username = document.getElementById("username").value.trim();

  // Basic Validation
  if (!email || !password || (isSignup && !username)) {
    alert("Please fill all required fields.");
    return;
  }

  if (isSignup) {
    alert("✅ Account created successfully! Logging in...");
  } else {
    alert("🔐 Login successful!");
  }

  // Simulate login → Hide modal
  document.getElementById("loginOverlay").style.display = "none";
}
