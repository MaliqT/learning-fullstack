const inputs = document.querySelectorAll(".controls input");
let isMouseDown = false;
let isChanging = false;


function handleUpdate() {
    if (this.type === "color" || isMouseDown) {
        const suffix = this.dataset.sizing || "";
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }
}

inputs.forEach(input => {
    // Track when mouse is pressed down on the slider
    input.addEventListener("mousedown", () => {
        isMouseDown = true;
    });
    
    // Track when mouse is released
    input.addEventListener("mouseup", () => {
        isMouseDown = false;
    });
    
    // Only update if mouse is down while moving
    input.addEventListener("change", handleUpdate);
    input.addEventListener("input", handleUpdate);
    input.addEventListener("mousemove", handleUpdate);
});