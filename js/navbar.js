document.addEventListener('DOMContentLoaded', function() {
    var navbarHTML = `
        <nav class="navbar">
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="research.html">Research</a></li>
                <li><a href="teaching.html">Teaching</a></li>
                <li><a href="docs/RoseNiousha_CV.pdf">CV</a></li>
            </ul>
            <div class="hamburger" id="hamburger">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </nav>
    `;

    // Select the element where you want to place the navbar
    var navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        navbarPlaceholder.innerHTML = navbarHTML;
    }

    // JavaScript to toggle the navbar on mobile
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

