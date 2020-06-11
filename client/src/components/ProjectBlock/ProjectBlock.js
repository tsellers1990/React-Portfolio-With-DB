import React from 'react';

function Brick({ data }){
    function imageClick() {
        // console.log("Click")
        window.open(data.link)
    }

    return(
        <div className="block">
            <h1 className="text">{ data.name }</h1>
            <img 
            className="img" 
            style={{width:"20%", float: "right", marginLeft: "20px", height: "150px"}} 
            src={ data.image } 
            alt={data.name} 
            href="https://picture-it-done.herokuapp.com/"
            onClick={ imageClick }
            />
            <p className="text">{ data.description }</p>
        </div>
    )
}
export default Brick;