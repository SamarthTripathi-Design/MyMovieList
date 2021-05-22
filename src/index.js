import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card.jsx";
import Sdata from "./Sdata";

function ncard(val) {
  return (
    <Card
      sname={val.sname}
      imgsrc={val.imgsrc}
      title={val.title}
      links={val.links}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="heading_style">List of my top 6 Amazon series</h1>
    {Sdata.map(ncard)}
  </>,
  document.getElementById("root")
);
