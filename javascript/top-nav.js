function myFunction() {
    var x = document.getElementById("tw-nav");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}
