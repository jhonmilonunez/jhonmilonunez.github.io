export default function ProjectButton({ func }) {
    return (
        <>
            <div className="button_container">
                <button className="xp"> 
                    <div className="btn_flex">
                        <h3>Buy XP? </h3>
                        <h3>4G </h3>
                    </div>
                </button>
                <button className="rr" onClick={ func }> 
                    <div className="btn_flex">
                        <h3>Reroll</h3>
                        <h3>2G </h3>
                    </div>
                </button>
            </div>
            
        </>
    );
}