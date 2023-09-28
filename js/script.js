const navbarNav = document.querySelector(".navbar-menu");

document.querySelector("#hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

const hamburger = document.getElementById("hamburger-menu");

let index = 0;
displayImages();
function displayImages() {
  let i;
  const images = document.getElementsByClassName("fade");
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  index++;
  if (index > images.length) {
    index = 1;
  }
  images[index-1].style.display = "block";
  setTimeout(displayImages, 2000); 
}

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targert)) {
    navbarNav.classList.remove("active");
  }
});

const form = document.querySelector(".contact-form form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const optionSelect = document.getElementById("option");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (nameInput.value.trim().length < 3) {
    alert("Nama harus minimal 3 karakter");
    return;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Email tidak valid");
    return;
  }

  if (optionSelect.value === "") {
    alert("Pilih salah satu opsi");
    return;
  }

  alert("Formulir berhasil dikirim!");

  nameInput.value = "";
  emailInput.value = "";
  optionSelect.selectedIndex = 0; 
});
