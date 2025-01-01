import '/src/react.css'
import websiteImage from '/src/img/website.jpg'
import classnames from 'classnames';
import PropTypes from 'prop-types'; 
import ProjectBlurb from '/src/ProjectBlurb.jsx'


export default function ProjectCard(props) {

    let count = 0;
    function viewProj(e) {
        if (count % 2 == 0) {
            e.currentTarget.classList.add("shown");
        } else {
            e.currentTarget.classList.remove("shown");
        }
        count++;
    };

    return (
        <>
        <div className={classnames("card", props.cost)} onClick={(e) => viewProj(e)}>
            <img id="pc" src={ websiteImage }></img>
            <div className="projInfo">
                <h3>{ props.trait1 }</h3>
                <h3>{ props.trait2 }</h3>
                <h1>{ props.name }</h1>
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

ProjectCard.defaultProps = {
    cost: "one",
    trait1: "Trait 1",
    trait2: "Trait 2",
    name: "Project Name",
};