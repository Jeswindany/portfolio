var menubar = document.getElementById("menu-bar")

function openCollapseMenu() {
    var collapse = document.getElementById("collapse-menu")
    if (collapse.style.height === "0px" || collapse.style.height === "") {
        collapse.style.height = collapse.scrollHeight + "px";
    } else {
        collapse.style.height = "0px";
    }
}

menubar.addEventListener('click', openCollapseMenu)

var cpYear = document.getElementById("year");
cpYear.innerHTML = new Date().getFullYear();
