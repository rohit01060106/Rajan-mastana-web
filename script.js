const menu = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");
if (menu) menu.addEventListener("click", () => navbar.classList.toggle("open"));

const whatsappNumber = "91XXXXXXXXXX"; // Replace with your WhatsApp number, without +, spaces or dashes.

document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  if (whatsappNumber.includes("X")) {
    alert("Please add your WhatsApp number in script.js first.");
    return;
  }
  const name = document.getElementById("name").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const text = `Hello Rajan Mastana!%0A%0AName: ${encodeURIComponent(name)}%0ASubject: ${encodeURIComponent(subject)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank");
  this.reset();
});