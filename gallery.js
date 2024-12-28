
var image = []

function imageToArray(){
    let col = document.getElementsByClassName("hidden")
    for (let i = 0; i < col.length; i++)
    {
        col.item(i).setAttribute("id", i);
        image.push(col.item(i))
    }

    image[1].classList.remove("hidden");
    image[1].classList.add("shown");

}

function isShown() {
    return document.getElementsByClassName("shown");
}

function makeShown(img) {
    img.classList.remove("hidden");
    img.classList.add("shown");
}

function makeHidden(img) {
    img.classList.remove("shown");
    img.classList.add("hidden");
}

function cycleLeft() {

}

function cycleRight() {
    let curr = image.find(isShown);
    let currIdx = curr.id;

    document.getElementById("test").innerHTML = currIdx.toString();
    document.getElementById("test2").innerHTML = curr.alt;

    makeHidden(curr);



    ++currIdx;
    curr = image[currIdx];

    makeShown(curr);



}