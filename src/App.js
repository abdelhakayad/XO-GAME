import { useContext } from "react";
import Board from "./Components/Board/Board";
import Modal from "./Components/modal/Modal";
import Start from "./Components/Start/Start";
import { GameContext } from "./Context/GameContext";


function App() {

  const {screen} = useContext(GameContext)
  return (
    <div className="App">
      <div className="container">  
        {screen ==='start' && <Start />}
        {screen ==='game' && <Board />}
        
    </div>
    <Modal />
      </div>
  );
}

export default App;
