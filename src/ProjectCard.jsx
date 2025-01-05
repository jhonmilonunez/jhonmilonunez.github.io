import '/src/react.css'
import placeholder from '/src/img/placeholder.jpg'
import classnames from 'classnames';
import PropTypes from 'prop-types'; 
import ProjectBlurb from '/src/ProjectBlurb.jsx'
import { useEffect } from 'react';


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

}



export default function ProjectCard(
    { 
        cost = "one",
        trait1 = "Trait 1",
        trait2 = "Trait 2",
        name = "Project Name", 
        image = placeholder, 
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