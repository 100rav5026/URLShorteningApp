import React from "react";
import Card from "./Card";
import brandIcon from "../images/icon-brand-recognition.svg";
import branddetails from "../images/icon-detailed-records.svg"
import brandfull from "../images/icon-fully-customizable.svg"
import LoadShortenUrl from "./LoadShortenUrl";


function MiddleContainer(props){

    return(
        <>
        <div className="middle-container">
            <div className="all-shorten-urls">
            <LoadShortenUrl ogLink = {props.ogLink} shortenLink = {props.shortenLink}/>
            </div>
            <h1>Advanced Statistics</h1>
            <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
            <div className="CardLayout">
                <Card heading="Brand Recognition" description="Boost your brand recognition with each click. Generic links don't mean thing. Branded links help instil confidence in your content." img={brandIcon}/>
                <hr/>
                <Card heading="Detailed Records" description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions." img={branddetails}/>
                <hr/>
                <Card heading="Fully Customizable" description="Improve brand awareness and content discoverability through customizable links,superchanging audience engagement." img={brandfull}/>
            </div>
        </div>
        </>
    );
}

export default MiddleContainer;