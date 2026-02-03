// Contact form submit action
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Thank you! Your message has been sent. Our team will contact you shortly.");

  this.reset();
});
