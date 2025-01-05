import { createRoot } from 'react-dom/client'
import ProjectCard from '/src/ProjectCard.jsx'
import ProjectButton from '/src/ProjectButton'
import websiteImage from '/src/img/website.jpg'
import reactImage from '/src/img/react.jpg'
import resumeImage from '/src/img/resume.jpg'


function Project(){
    return (
        <>
            <ProjectButton />
            <div className="cardcontainer">
                <ProjectCard image ={ websiteImage } name="Website" trait1="HTML/CSS" trait2="JavaScript" id="1"/>
                <ProjectCard image ={ resumeImage }name ="Resume" trait1="Career-Focused" trait2="Open to Growth"/>
                <ProjectCard image ={ reactImage } name="Projects Page" trait1="React.js" trait2="JSX"/>
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    );
}

const shopbar = createRoot(document.getElementById('shopbar'));
shopbar.render(<Project />);