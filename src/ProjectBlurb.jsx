import classnames from 'classnames';

export default function ProjectBlurb({ className, id }){
    return (
        <>
            <div className={classnames("blurb", className )} id={ id }>
                <p>Sample text</p>
            </div>
        </>
    );
}