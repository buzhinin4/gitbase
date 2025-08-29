function enrollSubmit(event) {
  event.preventDefault();
  document.querySelector(".enroll-form").style.display = "none";
  document.getElementById("successMsg").style.display = "block";
  return false;
}

function scrollToForm() {
  document.getElementById("enroll").scrollIntoView({ behavior: "smooth" });
}
