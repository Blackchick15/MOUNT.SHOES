function clickBoxOne() {
    let boxOne = document.getElementById("boxOne");
    let boxTwo = document.getElementById("boxTwo");
    let boxThree = document.getElementById("boxThree");

    if (boxOne.style.display === "flex") {
        boxOne.style.display = "flex"
    }else {
        boxOne.style.display = "flex";
        boxTwo.style.display = "none";
        boxThree.style.display = "none";
    }
}
function clickBoxTwo() {
    let boxOne = document.getElementById("boxOne");
    let boxTwo = document.getElementById("boxTwo");
    let boxThree = document.getElementById("boxThree");

    if (boxTwo.style.display === "none") {
        boxTwo.style.display = "flex"
        boxOne.style.display = "none";
        boxThree.style.display ="none"
    }
}
function clickBoxThree() {
    let boxOne = document.getElementById("boxOne");
    let boxTwo = document.getElementById("boxTwo");
    let boxThree = document.getElementById("boxThree");

    if (boxThree.style.display === "none") {
        boxThree.style.display = "flex"
        boxOne.style.display = "none";
        boxTwo.style.display = "none";
    }
}