// loading in top nav bar on all pages
fetch("partials/nav.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("nav-placeholder").innerHTML = data;
    });

fetch("partials/footer.html")
    .then(res => res.text())
    .then(data => {
    document.getElementById("footer-placeholder").innerHTML = data;
    });