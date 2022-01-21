function option(div) {

    //you
    let choosedOption = div.id;
    var elem1 = document.getElementById("user-option");
    var elem2 = document.getElementById("user-element");
    elem1.style.fontSize = "200px";
    elem2.style.fontSize = "50px";
    var y;
    if (choosedOption == "rock") {
        elem1.removeAttribute("class");
        elem1.classList.add("far");
        elem1.classList.add("fa-hand-rock");
        elem2.innerText = "Rock";
        y = 1;
    }
    else if (choosedOption == "paper") {
        elem1.removeAttribute("class");
        elem1.classList.add("far");
        elem1.classList.add("fa-hand-paper");
        elem2.innerText = "Paper";
        y = 2;
    }
    else {
        elem1.removeAttribute("class");
        elem1.classList.add("far");
        elem1.classList.add("fa-hand-scissors");
        elem2.innerText = "Scissor";
        y = 0;
    }

    //computer
    let x = Math.floor((Math.random() * 100) + 1);
    var elem3 = document.getElementById("comp-option");
    var elem4 = document.getElementById("comp-element");
    elem3.style.fontSize = "200px";
    elem4.style.fontSize = "50px";
    if (x % 3 == 1) {
        elem3.removeAttribute("class");
        elem3.classList.add("far");
        elem3.classList.add("fa-hand-rock");
        elem4.innerText = "Rock";
    }
    else if (x % 3 == 2) {
        elem3.removeAttribute("class");
        elem3.classList.add("far");
        elem3.classList.add("fa-hand-paper");
        elem4.innerText = "Paper";
    }
    else {
        elem3.removeAttribute("class");
        elem3.classList.add("far");
        elem3.classList.add("fa-hand-scissors");
        elem4.innerText = "Scissor";
    }

    // result
    var val = 0;
    if (x % 3 == y) {
        document.getElementById("result").innerHTML = "Draw&#128566;"
        val = 0;
    }
    else if (y == 1 && x % 3 == 2) {
        document.getElementById("result").innerHTML = "Lose&#128547;"
        val = -1;
    }
    else if (y == 1 && x % 3 == 0) {
        document.getElementById("result").innerHTML = "Win&#128526;"
        val = 1;
    }
    else if (y == 2 && x % 3 == 1) {
        document.getElementById("result").innerHTML = "Win&#128526;"
        val = 1;
    }
    else if (y == 2 && x % 3 == 0) {
        document.getElementById("result").innerHTML = "Lose&#128547;"
        val = -1;
    }
    else if (y == 0 && x % 3 == 1) {
        document.getElementById("result").innerHTML = "Lose&#128547;"
        val = -1;
    }
    else if (y == 0 && x % 3 == 2) {
        document.getElementById("result").innerHTML = "Win&#128526;"
        val = 1;
    }
}
