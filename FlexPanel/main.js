

const panels = document.querySelectorAll(".panel");

function toggleOpen() {
    // Close any open panels
    panels.forEach(panel => {
        if (panel !==  this && panel.classList.contains("open") && panel.classList.contains("open-active")) {
            panel.classList.remove("open");
            panel.classList.remove("open-active");
        }
    });
    // toggle clicked panel
    this.classList.toggle("open");
    
    this.addEventListener("transitionend", function(e) {
        if (e.propertyName.includes("flex")) {
            this.classList.toggle("open-active");
        }
    }, { once: true });
}


panels.forEach(panel => panel.addEventListener("click", toggleOpen));