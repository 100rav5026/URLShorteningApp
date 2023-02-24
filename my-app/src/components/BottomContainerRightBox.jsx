import React from "react";
import FooterElements from "./FooterElements";
import facebookIcon from "../images/icon-facebook.svg";
import instagramIcon from "../images/icon-instagram.svg";
import pinterestIcon from "../images/icon-pinterest.svg";
import twitterIcon from "../images/icon-twitter.svg";

function BottomContainerRightBox(){
    return(
        <div className="bottom-container-part-2">
            <div className="bottom-container-part-2-part-1">
                <h1 className="footer-logo">Shortly</h1>
            </div>
            <div className="bottom-container-part-2-part-2">
                <FooterElements header="Features" myArray={["Link Shortening","Branded Links","Analytics"]}/>
                <FooterElements header="Resources" myArray={["Blogs","Developers","Support"]}/>
                <FooterElements header="Company" myArray={["About","Our Team","Careers","Contacts"]}/>
                <img className="bottom-container-images" src={facebookIcon} alt="facebook"/>
                <img className="bottom-container-images" src={instagramIcon} alt="instagram"/>
                <img className="bottom-container-images" src={pinterestIcon} alt="pinterest"/>
                <img className="bottom-container-images" src={twitterIcon} alt="twitter"/>
            </div>
        </div>
    );
}

export default BottomContainerRightBox;