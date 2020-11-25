import React from "react";

let r = Math.floor(Math.random() * 1000);
const adUrl = "/ads/?r="+r;

function AdGenerator() { //retrieves images based on "adUrl" url
  return (
    <div>
      <img className="ad" src={adUrl} />
    </div>
  );
}

export default AdGenerator;
