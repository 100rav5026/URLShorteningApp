import React from "react";

function Card(props){
    return(
        <div className="Card">
            <div className="CardImage">
                <img src={props.img} alt={props.altText}/>
            </div>
            <h2>{props.heading}</h2>
            <p>{props.description}</p>
        </div>
    );
}

export default Card;