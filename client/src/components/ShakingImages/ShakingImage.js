import React from "react";
import './ShakingImage.css'
import Test from '../Images/PID.PNG'

//turn this into an API so others can use it



export const Shake = (pos) => {
   
    let degree= 0;

    //rotates right
    if (degree > 25) {

    } 
    //rotates left
    else if (degree < -25) {

    }


}


export const ShakingImage = ({alt, src}) => {



    return (
        <div>
            <img className="wiggle" alt={alt} src={src}/>
        </div>
    )
}