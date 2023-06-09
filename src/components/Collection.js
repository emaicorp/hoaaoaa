import React from "react";
import { Image } from "./RoadMapData.js";

export default function Collection() {
  const images = Image.map((items) => {
    return (
      <div className="collection">
        {" "}
        <img src={items.img} key={items.id} alt={items.alt} />
      </div>
    );
  });
  return (
    <div className="collectible">
      <h1>NTFx Collectibles</h1>
      <div className="collection1">{images}</div>
    </div>
  );
}
