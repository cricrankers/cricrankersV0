document.getElementById('closeMenuBackground').addEventListener('click',closeDrawer);
document.getElementById('menubackground').addEventListener('click',openDrawer);

function openDrawer() {
    document.getElementById("drawer").style.width = "250px";
    document.getElementById("overlay").style.display = "block";
}

function closeDrawer() {
    document.getElementById("drawer").style.width = "0";
    document.getElementById("overlay").style.display = "none";
}

window.onclick = function(event) {
    const overlay = document.getElementById('overlay');
    if (event.target === overlay) {
        closeDrawer();
    }
}
