document.addEventListener("DOMContentLoaded", function () {
    const userMenu = document.querySelector(".user"); 
    const dropdownMenu = document.getElementById("dropdownMenu");
    const arrowIcon = document.querySelector(".arrow-icon2"); 

    userMenu.addEventListener("click", function (event) {
        dropdownMenu.classList.toggle("active");
        console.log("Dropdown menu aktywne:", dropdownMenu.classList.contains("active"));
        arrowIcon.classList.toggle("rotated");
        event.stopPropagation(); 
    });

    document.addEventListener("click", function (event) {
        if (!userMenu.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove("active");
            arrowIcon.classList.remove("rotated"); 
        }
    });
});
