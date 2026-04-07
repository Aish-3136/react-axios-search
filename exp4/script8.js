function filterImages(category, btn) {
  document.querySelectorAll(".gallery img").forEach(img => {
    img.style.display =
      (category === "all" || img.classList.contains(category)) ? "block" : "none";
  });

  document.querySelectorAll(".buttons button").forEach(b => {
    b.classList.remove("active");
  });

  btn.classList.add("active");
}

function openModal(img) {
  document.getElementById("modalImg").src = img.src;

  document.getElementById("wonderName").innerText = img.dataset.name;
  document.getElementById("wonderLocation").innerText = img.dataset.location;
  document.getElementById("wonderBuilt").innerText = img.dataset.built;
  document.getElementById("wonderType").innerText = img.dataset.type;

  document.getElementById("modal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
  document.body.style.overflow = "";
}
