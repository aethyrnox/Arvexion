function togglePassword() {
  const input = document.getElementById("password");
  input.type = input.type === "password" ? "text" : "password";
}

function login(event) {
  event.preventDefault();
  // Simulasi login sukses
  window.location.href = "main.html";
  return false;
}
