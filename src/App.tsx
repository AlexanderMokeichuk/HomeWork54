import {useState} from "react";
import "./App.css";
import CreateItems from "./components/createItems/createItems.ts";
import {Cube} from "./types";
import DrawBoard from "./components/DrawBoard/DrawBoard.tsx";


function App() {
  const [cube, setCube] = useState<Cube[]>(CreateItems());

  const openCube = (id:number) => {
    const cubesCopy = [...cube];
    const cubeCopy = {...cubesCopy[id]};
    cubeCopy.clicked = true;
    cubesCopy[id] = cubeCopy;
    setCube(cubesCopy);
  };

  const resetGame = () => {
    setCube(CreateItems());
  };

  return (
    <>
      <div className={"container"}>
          {cube.map((cube) => {
            return (<DrawBoard
              key={cube.id}
              id={cube.id}
              hasItem={cube.hasItem}
              clicked={cube.clicked}
              openCube={() => openCube(cube.id)}
            >
            </DrawBoard>);
          })}
      </div>
      <button onClick={resetGame}>Reset</button>
    </>
  );
}

export default App;
