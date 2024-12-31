
let image = []
const autoCycle = setInterval(cycleRight, 5000);

function initLoad(){
    imageToArray();
    autoCycle;
}

function imageToArray(){
    let col = document.getElementsByClassName("hidden")
    for (let i = 0; i < col.length; i++)
    {
        col.item(i).setAttribute("id", i);
        col.item(i).setAttribute("usemap", "#img_map");
        image.push(col.item(i))
    }

    image[0].classList.remove("hidden");
    image[0].classList.add("shown");
    changeCaption();

    //document.getElementById("test2").innerHTML = image[0].alt;
}

function isShown(element) {
    return element.classList.contains("shown");
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
    let curr = image.find(isShown);
    let currIdx = curr.id;

    makeHidden(curr);

    --currIdx;
    
    if(currIdx < (image.length) && currIdx != -1){
        curr = image[currIdx];
    
        makeShown(curr);
        changeCaption();
    } else if (currIdx == -1){
            
        curr = image[image.length - 1];
        currIdx = curr.id;

        makeShown(curr);
        changeCaption();
    }

}

function cycleRight() {
    let curr = image.find(isShown);
    let currIdx = curr.id;

    makeHidden(curr);

    ++currIdx;

    if(currIdx < (image.length)){
        curr = image[currIdx];
        currIdx = curr.id;

        makeShown(curr);
        changeCaption();

    } else if (currIdx == (image.length)) {

        curr = image[0];
        currIdx = curr.id;

        makeShown(curr);
        changeCaption();

    }
}

function changeCaption() {
    let curr = image.find(isShown);

    document.getElementById("cap").innerHTML = curr.alt;
}