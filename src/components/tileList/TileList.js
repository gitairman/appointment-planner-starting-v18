import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objects }) => {
  let tilesListToRender = [];

  if (objects) {
    tilesListToRender = objects.map((object) => (
    <Tile name={object.name} description={object} />
  ));}

  return (
    <div>
      {tilesListToRender}
    </div>
  );
};

// 