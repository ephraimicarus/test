import * as React from "react";
import AdGenerator from "./AdGenerator.jsx";
import MyHeader from "./MyHeader.jsx";
import { MyBody } from "./MyBody.jsx";
import "../css/app.css";
import { LoadingDiv } from "./LoadingDiv.jsx";

function App () {
  return (
    <div className="app-container">
      <MyHeader />
      <MyBody />
      <AdGenerator/>
    </div>
  )
}

export default App
