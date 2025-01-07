import { createRoot } from 'react-dom/client'
import { useState } from 'react';
import { rollCards } from './ProjectCard'
import ProjectButton from '/src/ProjectButton'

function Project(){

    const [cards, setCards] = useState(rollCards());

    function rerollHelper() {
        setCards(rollCards());
    }

    return (
        <>
            <ProjectButton func={ rerollHelper } />
            <div className="cardcontainer">
                { cards };
            </div>
        </>
    );
    
}

const shopbar = createRoot(document.getElementById('shopbar'));
shopbar.render(<Project />);