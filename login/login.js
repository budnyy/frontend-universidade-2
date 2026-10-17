const registerContainer = document.getElementById("registerContainer");
const loginContainer = document.getElementById("loginContainer");
const toggleSpans = document.querySelectorAll(".toggleSpan");

toggleSpans.forEach(span => {
  span.addEventListener("click", toggleMethod);
});

function toggleMethod(){
  loginContainer.classList.toggle("hidden");
  registerContainer.classList.toggle("hidden");
}
