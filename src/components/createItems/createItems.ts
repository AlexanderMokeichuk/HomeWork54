import {Cube} from "../../types";
const CreateItems = () => {
  const arrayCubes:Cube[] = [];

  for(let i = 0; i < 36; i++) {
    arrayCubes.push({
        id: i,
        hasItem:false,
        clicked:false
    });
  }

  const randomIndex = Math.round(Math.random() * 35);
  arrayCubes[randomIndex].hasItem = true;

  return arrayCubes;
}
export default CreateItems;