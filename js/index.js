function invalidStyle(className) {
    document.querySelector("." + className + " " + "input").style.borderColor = "hsl(0, 100%, 74%)";
    document.querySelector("." + className + " " + "img").style.display = "revert";
    document.querySelector("." + className + " " + "p").style.display = "revert";
}

function validStyle(className) {
    document.querySelector("." + className + " " + "input").style.borderColor = "revert";
    document.querySelector("." + className + " " + "img").style.display = "none";
    document.querySelector("." + className + " " + "p").style.display = "none";
}

function validateForm() {
    valid = true

    if (document.querySelector(".first-name input").value == "") {
        invalidStyle("first-name");

        valid = false;
    }
    else {
        validStyle("first-name");
    }

    if (document.querySelector(".last-name input").value == "") {
        invalidStyle("last-name");

        valid = false;
    }
    else {
        validStyle("last-name");
    }

    if (document.querySelector(".email input").value == "") {
        invalidStyle("email");

        valid = false;
    }
    else {
        validStyle("email");
    }

    if (document.querySelector(".password input").value == "") {
        invalidStyle("password");

        valid = false;
    }
    else {
        validStyle("password");
    }

    return valid;

}