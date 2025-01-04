import '/src/react.css'
import placeholder from '/src/img/placeholder.jpg'
import classnames from 'classnames';
import PropTypes from 'prop-types'; 
import ProjectBlurb from '/src/ProjectBlurb.jsx'

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
           {/*  e.currentTarget.lastChild.lastChild.classList.remove("bl-hidden"); */}
        } else {
            e.currentTarget.classList.remove("card_shown");
           {/*  e.currentTarget.lastChild.lastChild.classList.add("bl-hidden"); */}
        }
        count++;
    };

    return (
        <>
        <div className={classnames("card", cost)} onClick={ (e) => viewProj(e) }>
            <img id="pc" src={ image }></img>
            <div className="projDetails">
                <div className="info">
                    <h3>{ trait1 }</h3>
                    <h3>{ trait2 }</h3>
                    <h1>{ name }</h1>
                </div>
                {/* <ProjectBlurb className="bl-hidden" id={ name } /> --> */}
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