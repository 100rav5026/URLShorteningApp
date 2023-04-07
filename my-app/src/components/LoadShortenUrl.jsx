import React, {useState} from "react";

function LoadShortenUrl(props) {
  const [buttonStates, setButtonStates] = useState({});
  const [buttonColors, setButtonColors] = useState({});

  const handleCopyButton = (event, index) => {
    event.preventDefault();
    const shortLink = props.shortenLink[index];
    navigator.clipboard.writeText(shortLink);
    setButtonStates((prevState) => ({
      ...prevState,
      [shortLink]: true
    }));

    setButtonColors((prevState) => ({
      ...prevState,
      [shortLink]: "hsl(257, 27%, 26%)"
    }));
  };

  const links = props.ogLink.map((link, index) => (
    <div className="display-url" key={index}>
      <p>{link}</p>
      <a className="shorten-link-position" href={props.shortenLink[index]}>
        {props.shortenLink[index]}
      </a>
      <button
        type="button"
        className="submitButton"
        onClick={(event) => handleCopyButton(event, index)}
        disabled={buttonStates[props.shortenLink[index]]}
        style={{ backgroundColor: buttonColors[props.shortenLink[index]] }}
      >
        {buttonStates[props.shortenLink[index]] ? "Copied" : "Copy"}
      </button>
    </div>
  ));

  return <>{links}</>;
}

export default LoadShortenUrl;
