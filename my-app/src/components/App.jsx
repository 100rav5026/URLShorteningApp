import React, { useState } from "react";
import TopContainer from "./TopContainer";
import MiddleContainer from "./MiddleContainer";
import BottomContainer from "./BottomContainer";


function App() {

  const [originalLink,setOriginalLink] = useState([]);
  const [shortenLink,setShortenLink] = useState([]);

  const handleOriginalLink = (newOriginalLink) => {
    setOriginalLink([...originalLink,newOriginalLink]);
  }

  const handleShortenLink = (newShortenLink) => {
    setShortenLink([...shortenLink,newShortenLink]);
  }

  return (
    <div>
      <TopContainer ogLink={originalLink} setOgLinkFunction={handleOriginalLink} shortenLink={shortenLink} setShortenLinkFunction={handleShortenLink}/>
      <MiddleContainer ogLink={originalLink} shortenLink={shortenLink} />
      <BottomContainer/>
    </div>
    )
}

export default App;
