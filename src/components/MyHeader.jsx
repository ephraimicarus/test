import React from "react";
import "../css/app.css";
let r = Math.floor(Math.random() * 1000);
const adUrl = "/ads/?r=" + r;

function MyHeader() {
  return (
    <header>
      <div className="header-wrapper">
        <div className="title-wrapper">
          <h1>Emilio's ASCII face store</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li>
              <a href="">Sort by Id</a>
            </li>
            <li>
              <a href="">Sort by Price</a>
            </li>
            <li>
              <a href="">Sort by Size</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default MyHeader;
