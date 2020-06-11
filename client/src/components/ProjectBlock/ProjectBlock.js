import React from 'react';

export function Brick({ data }){
    return(
        <div className="proud1Block">
            <h1>{ data.name }</h1>
            <img className="projectPic" src={ data.image } alt="Project One" link={ data.link }/>
            <p>{ data.description }</p>
        </div>
    )
}
export default Brick;