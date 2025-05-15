document.addEventListener("DOMContentLoaded", function () {
    // Slider z bannerem
    const images = ["./img/bannerphoto.png", "./img/bannerphoto2.jpg", "./img/bannerphoto3.png"];
    let currentIndex = 0;
    const dots = document.querySelectorAll('.dot');
    const imageElement = document.getElementById("imagebanner");
    const changeButton = document.getElementById("arrow-banner");

     function changeImage() {
        currentIndex = (currentIndex + 1) % images.length; 
        updateDots();
        imageElement.src = images[currentIndex]; 
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add("active");
            } else {
                dot.classList.remove("active");
            }
        });
    }

    changeButton.addEventListener("click", changeImage);
    setInterval(changeImage, 3000);

    document.querySelectorAll("a,input").forEach(div => div.setAttribute("tabindex", "0"));
    document.addEventListener("keydown", function (event) {
        if (event.key === "Tab") {
            event.preventDefault();
            moveFocus(event.shiftKey ? -1 : 1);
        }
    });

    function moveFocus(direction) {
        const focusableElements = document.querySelectorAll("[tabindex='0'], input, button, a, textarea, select");
        const elementsArray = Array.from(focusableElements);
        const currentIndex = elementsArray.indexOf(document.activeElement);  
        let nextIndex = (currentIndex + direction + elementsArray.length) % elementsArray.length;
        elementsArray[nextIndex].focus();
    }

    const urlParams = new URLSearchParams(window.location.search);
    const savedTheme = urlParams.get('theme') || 'light';

    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
    } else {
        document.body.classList.add('light');
    }

    const icons = document.querySelectorAll('.icons img, .arrow-icon, .arrow-icon2, .arrow-icon3, .cateallegro img');
    icons.forEach(icon => {
        if (savedTheme === 'dark') {
            icon.src = icon.getAttribute('data-dark');
        } else {
            icon.src = icon.getAttribute('data-light');
        }
    });

    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.checked = (savedTheme === 'dark');
    }

    // 🔽 Accessibility button and menu setup
    const fab = document.createElement("div");
    fab.className = "accessibility-fab";
    fab.innerHTML = '<img src="./svg/persondost.svg" alt="Dostępność">';
    fab.addEventListener("click", function () {
        toggleMenu();
    });
    document.body.appendChild(fab);

    const menu = document.createElement("div");
    menu.className = "accessibility-menu";
    menu.id = "accessibilityMenu";
    menu.innerHTML = `
        <h4>Ustawienia głosu i nawigacji</h4>
        <div class="menu-row">
            <div class="menu-box">🦻<br>Ustawienia czytnika<br>ekranowego</div>
            <div class="menu-box">🔊<br>Czytnik tekstu</div>
            <div class="menu-box">🎙️<br>Polecenia głosowe</div>
        </div>

        <h4>Ustawienia kolorów</h4>
        <div class="menu-row">
            <div class="menu-box">🌙<br>Ciemny, duży kontrast</div>
        </div>
    `;
    document.body.appendChild(menu);
});

// ✅ Funkcja dostępna globalnie — działa z onclick="toggleMenu()"
function toggleMenu() {
    const menu = document.getElementById("accessibilityMenu");
    if (menu) {
        menu.classList.toggle("show");
    }
}
