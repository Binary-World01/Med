document.addEventListener("DOMContentLoaded", function () {
    
    const navItems = document.querySelectorAll(".nav-item");
    const indicator = document.querySelector(".nav-indicator");

    function moveIndicator(element) {
        const itemWidth = element.offsetWidth; // Get width of the menu item
        indicator.style.width = `${itemWidth + 5}px`; // Resize cylinder
        indicator.style.transform = `translateX(${element.offsetLeft}px) translateY(-50%)`; // Move it smoothly

        // Remove active class from all, then add to the selected item
        navItems.forEach(i => i.classList.remove("active"));
        element.classList.add("active");
    }

    navItems.forEach(item => {
        item.addEventListener("mouseover", (e) => moveIndicator(e.target));
        item.addEventListener("click", (e) => moveIndicator(e.target));
    });

    // Set initial position based on the active item
    moveIndicator(document.querySelector(".nav-item.active"));
});


    