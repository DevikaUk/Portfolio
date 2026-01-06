fetch("Navbar.html?v=1") 
    .then(res => res.text())
    .then(data => {
        document.body.insertAdjacentHTML("afterbegin", data);

        const toggle = document.getElementById("menu-toggle");
        const links = document.querySelector(".pill-links");

        toggle.addEventListener("click", () => {
            links.classList.toggle("active");
        });
    });
