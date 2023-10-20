import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objects }) => {
  let tilesListToRender = [];

  if (objects) {
    tilesListToRender = objects.map((tile, index) => {
      const {name, ...description } = tile;
    return <Tile key={index} name={name} description={description} />
    });}

  return (
    <div>
      {tilesListToRender}
    </div>
  );
};

// 