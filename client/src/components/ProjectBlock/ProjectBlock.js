import React from 'react';

function Brick({ data }){
    // consol
    return(
        <div className="proud1Block">
            <h1>{ data.name }</h1>
            <img className="img" style={{width:"20%", float: "right", marginLeft: "20px", height: "150px"}} src={ data.image } alt={data.name} link={ data.link }/>
            <p>{ data.description }</p>
        </div>
    )
}
export default Brick;