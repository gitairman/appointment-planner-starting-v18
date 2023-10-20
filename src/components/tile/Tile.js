import React from "react";

export const Tile = ({name, description}) => {
  const tile = [];
  for (let item in description) {
    tile.push(<p>{item}: {description[item]}</p>);
  }
  
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {tile}
    </div>
  );
};
