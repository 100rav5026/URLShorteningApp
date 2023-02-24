import React from "react";
import BottomContainerLeftBox from "./BottomContainerLeftBox";
import BottomContainerRightBox from "./BottomContainerRightBox";

function BottomContainer(){
    return(
        <div className="bottom-container">
            <BottomContainerLeftBox/>
            <BottomContainerRightBox/>
        </div>
    );
}

export default BottomContainer;