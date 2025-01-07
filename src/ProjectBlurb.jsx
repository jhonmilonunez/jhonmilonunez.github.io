import classnames from 'classnames';

const blurbArr = [
    {   
        id:"Website", 
        blurb:  `
                 My website, which I started developing on December 26th, 2024, showcases my
                 expertise in coding a user-friendly website that showcases my talents as a
                 Frontend Engineer.
                `
    },
    {
        id:"Resume", 
        blurb:  `
                My resume highlights my achievements during my late high school and college 
                career. My highlights so far have been being the Events Coordinator of the
                Asian Student Union, a role in which a large-scale event is planned to
                showcase the talent of the Asian community at Binghamton university, as well
                as the planning and development of this website. Learning to design a website
                with UI/UX principles in mind has challenged me unlike any class I have ever 
                taken.
                `
    },
    {
        id:"Projects Page", 
        blurb:  `
                The projects page of my website utilize React.js and JSX to form components 
                that represent each of my personal projects. It is stylized in the form of a
                shop from the game Teamfight Tactics, which is a game that I enjoy playing
                in my free time.
                `
    },
];

export default function ProjectBlurb( 
    { 
        id = "Project Name",
        blurb = "The quick brown goofy ox jumped over the lazy Dixie."
    } 
) {

    function chooseBlurb() {
        for(let i = 0; i < blurbArr.length; i++){
            if(id == blurbArr[i].id){
                blurb = blurbArr[i].blurb;
            }
        }
    }
    chooseBlurb();
    return (
        <>
            <div className={classnames("blurb bl-hidden")} id={ id }>
                <p> { blurb } </p>
            </div>
        </>
    );
}