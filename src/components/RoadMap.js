import React from "react";
import { RoadMapDat } from "./RoadMapData.js";

export default function RoadMap() {
  //console.log(hover);
  const [isShown, setIsShown] = React.useState(false);

  function hovered() {
    //console.log(setHover);
    setIsShown((prevState) => !prevState);

    // console.log(hover);
  }

  let hover = RoadMapDat.map((items) => {
    return (
      isShown && (
        <div key={items.id} className="RoadMap-items">
          <div className="RoadMap-items-header">
            <h1>{items.header}</h1>
            {items.isCompleted ? (
              <h3>Completed</h3>
            ) : (
              <h3 style={{ backgroundColor: "#433765" }}>OnGoing</h3>
            )}
          </div>

          <ol>
            <li>{items.decriptin1}</li>
            <li>{items.decriptin2}</li>
          </ol>
        </div>
      )
    );
  });

  // return console.log(prevState);
  // console.log(data);
  //});
  //console.log(hover);

  return (
    <div className="RoadMap">
      <h1 onMouseOver={hovered}> Road Map</h1>
      {hover}
    </div>
  );
}
