
var image = []

function imageToArray(){
    let col = document.getElementsByClassName("hidden")
    for (let i = 0; i < col.length; i++)
    {
        col.item(i).setAttribute("id", i);
        image.push(col.item(i))
    }

    image[0].classList.remove("hidden");
    image[0].classList.add("shown");
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
    } else if (currIdx == -1){
            
        curr = image[image.length - 1];
        currIdx = curr.id;

        makeShown(curr);
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

    } else if (currIdx == (image.length)) {

        curr = image[0];
        currIdx = curr.id;

        makeShown(curr);

    }
}