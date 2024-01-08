import {Cube} from "../../../types";
const ArrayObjectsForBoard = () => {
  const arrayCubes:Cube[] = [];

  for(let i = 0; i < 36; i++) {
    arrayCubes.push({hasItem:false,clicked:false});
  }
  const randomIndex = Math.round(Math.random() * 35);
  arrayCubes[randomIndex].hasItem = true;

  return arrayCubes;
}
export default ArrayObjectsForBoard;