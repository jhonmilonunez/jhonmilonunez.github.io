import { createRoot } from 'react-dom/client'
import ProjectCard from '/src/ProjectCard.jsx'


function Project(){
    return (
        <>
            <ProjectCard cost = "four" name="Portfolio Website" trait1="HTML/CSS" trait2="JavaScript"/>
            <ProjectCard cost = "five" name ="Resume" trait1="Career-Focused" trait2="Open to Growth"/>
            <ProjectCard cost = "two" name="Projects Page" trait1="React.js" trait2="JSX"/>
            <ProjectCard />
            <ProjectCard />
        </>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<Project />);