// Load reusable HTML components
function loadComponent(id, file) {
  fetch(`components/${file}`)
    .then(res => res.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
    });
}

// Load navbar
loadComponent("navbar", "navbar.html");
