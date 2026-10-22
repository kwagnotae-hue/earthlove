window.onload = ifResize;
window.onresize = ifResize;

function ifResize() {
    var winWidth = document.documentElement.clientWidth;
    var winHeight = document.documentElement.clientHeight;
    var target = document.getElementById("inframe");

    if (winWidth > 1024) {
        // Desktop: Keep your original logic
        target.setAttribute("width", winWidth - 200); 
        target.setAttribute("height", winHeight);
    } else {
        // Smartphone: Use the full width of the screen
        target.setAttribute("width", winWidth - 20); 
        target.setAttribute("height", "auto"); 
    }
}