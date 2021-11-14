const body = document.body

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        body.style.opacity = 1;
        body.style.backgroundImage = 'url("assets/bg_desk.gif")';

    }
}
