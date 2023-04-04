import React from "react";


function FooterElements(props){
    return(
        <div className="footer-elements">
            <p className="footer-elements-heading">{props.header}</p>
            {(props.myArray).map((item,index) => <p key={index}>{item}</p>)}
        </div>
    );
}

export default FooterElements;