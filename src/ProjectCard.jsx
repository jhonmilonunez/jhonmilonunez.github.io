import '/src/react.css'

import placeholder from '/src/img/placeholder.jpg'
import websiteImage from '/src/img/website.jpg'
import reactImage from '/src/img/react.jpg'
import resumeImage from '/src/img/resume.jpg'

import classnames from 'classnames';
import PropTypes from 'prop-types'; 
import { useEffect } from 'react';

import ProjectBlurb from '/src/ProjectBlurb.jsx'

const propsArr = [ // {} => indicates an empty project
    {image: websiteImage, name:"Website", trait1:"HTML/CSS", trait2:"JavaScript"},
    {image: resumeImage, name:"Resume", trait1:"Career-Focused", trait2:"Open to Growth"},
    {image: reactImage, name:"Projects Page", trait1:"React.js", trait2:"JSX"},
    {},
    {},
];
export function rollCards(){
    let foundPropsArr = [];
    let arrLength = propsArr.length;
    let rand = Math.floor(Math.random() * arrLength);
    let itr = 0

    while(itr < arrLength)
    {
        if ( !foundPropsArr.includes(propsArr[rand]) ){
            foundPropsArr.push(propsArr[rand]);
            itr++;       
        } else {
            rand = Math.floor(Math.random() * arrLength);
        }
    };
    return foundPropsArr.map( (e) => { 
        return <ProjectCard image ={ e.image } name={ e.name } trait1={ e.trait1 } trait2={ e.trait2 } /> ;
    });
}

export function chooseColor() {
    const colorArr = [
        {/* one */ color1:"#122331", color2: "#223038", odds: 0.18},
        {/* two */ color1:"#0F3329", color2: "#0B4729", odds: 0.25},
        {/* three */ color1:"#17234A", color2: "#1A4D7D", odds: 0.32},
        {/* four */ color1:"#330F34", color2: "#991A67", odds: 0.22},
        {/* five */ color1:"#653C02", color2: "#A75B02", odds: 0.03},
    ];


    let chosenPair = Math.floor(Math.random() * colorArr.length);
    let startColor = colorArr[chosenPair].color1;
    let endColor = colorArr[chosenPair].color2;

    let elements = document.getElementsByClassName("card");
    for(let i = 0; i < elements.length; i++){

        chosenPair = Math.floor(Math.random() * colorArr.length);
        startColor = colorArr[chosenPair].color1;
        endColor = colorArr[chosenPair].color2;

        elements[i].style.backgroundImage = `linear-gradient(to right, ${ startColor } , ${ endColor } )`;
    }

    console.log("Colors swapped");

}

export default function ProjectCard(
    { 
        cost = "one",
        image = placeholder,
        name = "Project Name", 
        trait1 = "Trait 1",
        trait2 = "Trait 2",
    }
) {

    let count = 0;
    function viewProj(e) {
        if (count % 2 == 0) {
            e.currentTarget.classList.add("card_shown");
            e.currentTarget.lastChild.lastChild.lastChild.classList.remove("bl-hidden");
        } else {
            e.currentTarget.classList.remove("card_shown");
            e.currentTarget.lastChild.lastChild.lastChild.classList.add("bl-hidden");
        }
        count++;
    };

    useEffect(() => {
        let comps = document.getElementsByClassName("card");
        Array.from(comps).forEach((e) => chooseColor());
    });


    return (
        <>  
        <div className={classnames("card", cost)} onClick={ (e) => viewProj(e)}>
            <img id="pc" src={ image }></img>
            <div className="projDetails">
                <div className="info">
                    <h3>{ trait1 }</h3>
                    <h3>{ trait2 }</h3>
                    <h1>{ name }</h1>
                    <ProjectBlurb id={ name }/>
                </div>
            </div>
        </div>
        </>
    );
}

ProjectCard.propTypes = {
    cost: PropTypes.string,
    trait1: PropTypes.string,
    trait2: PropTypes.string,
    name: PropTypes.string,
}