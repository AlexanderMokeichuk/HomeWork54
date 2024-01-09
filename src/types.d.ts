import React from "react";

export interface Cube extends React.PropsWithChildren{
  id: number
  hasItem: boolean,
  clicked: boolean,
  openCube?: React.MouseEventHandler,
}