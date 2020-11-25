import React from "react";

let r = Math.floor(Math.random() * 1000);
const adUrl = "/ads/?r="+r;

function AdGenerator() {
  return (
    <div>
      Ad Generator
      <img className="ad" src={adUrl} />
    </div>
  );
}

export default AdGenerator;
