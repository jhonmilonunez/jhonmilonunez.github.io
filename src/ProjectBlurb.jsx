import classnames from 'classnames';

export default function ProjectBlurb(){
    return (
        <>
            <div className={classnames("blurb bl-hidden")}>
                <p> The quick brown fox jumped over the lazy dog.</p>
            </div>
        </>
    );
}