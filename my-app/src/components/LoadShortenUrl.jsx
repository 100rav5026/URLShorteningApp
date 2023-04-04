import React from "react";
import Button from "./Button";

function LoadShortenUrl(props){

    const links = Array.from({ length: props.ogLink.length }, (_, i) => (
        <div className="display-url">
            <p key={i}>
                {props.ogLink[i]} 
            </p>
            <a className="shorten-link-position" href={props.shortenLink[i]}>{props.shortenLink[i]}</a>
            <button onClick={props.handleCopy} className="submitButton">Copy</button>
            {/* <Button onClick={handleButtonText} buttonText={buttonText} className="submitButton"></Button> */}
        </div>
      ));

    return (
        <>
        {links}
        </>
    )
}

export default LoadShortenUrl;