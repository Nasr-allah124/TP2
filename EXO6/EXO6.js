let titre = document.getElementById("titre");
let menu = document.getElementById("menu");

titre.onclick = function () {
  if (menu.style.display === "none") {
    menu.style.display = "block"; // ouvrir
  } else {
    menu.style.display = "none";  // fermer
  }
};
