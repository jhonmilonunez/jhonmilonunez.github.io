
const col = document.getElementsByClassName("light");
const col_array = Array.from(col);
const elem_bgL = document.querySelector(".bglight");
const elem_bgD = document.querySelector(".bglight");

function switchMode() {
    if(elem_bgL.classList.contains("bglight")) { // checks if in light mode
        lightToDark();
        document.querySelector("#btn").innerHTML = "dark";
    } else {
        darkToLight();
        document.querySelector("#btn").innerHTML = "light";
    }

    //document.getElementById("test").innerHTML = col_array;

}

function lightToDark(){
 
    col_array.forEach(element => {
        element.classList.remove("light");
        element.classList.add("dark");
    });

    elem_bgL.classList.remove("bglight");
    elem_bgL.classList.add("bgdark");
}

function darkToLight(){
    col_array.forEach(element => {
        element.classList.remove("dark");
        element.classList.add("light");
    });

    elem_bgL.classList.remove("bgdark");
    elem_bgL.classList.add("bglight");
}