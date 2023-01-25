import { createContext, useContext, useEffect, useState } from "react";
import { calcBestMove, calcWinner } from "../helpers/calcSquares";
import { ModalContext} from "../Context/ModalContext";
const GameContext = createContext()

const GameState = (props) => {
    const {showModal, setModaleMode ,hideModal} = useContext(ModalContext)

    const [screen , setScreen] = useState('start')

    const [activeUser , setActiveUser] = useState("x")
    const [playMode , setplayMode] = useState("user")

    const [squares , setSquares] = useState(new Array(9).fill(''))
    const[xnext , setXnext] = useState(false)
    
    const handleSquareClick = (ix) => {
        
        if (squares[ix] || winner ) {
            return;
        }
        const currentUser = xnext ? 'o' :'x'
        if(playMode=== "cpu" && currentUser!== activeUser) {
            return
        }

        let ns= [...squares]
        ns[ix] = !xnext? 'x':'o';

        setSquares(ns)
        setXnext(!xnext)
        
        // check winner 
        checkWinner(ns)


    };

    const [winner , setWinner] = useState(null)
    const [winnerLine , setWinnerLine] = useState(null)
    
    const [ties , setTies] = useState({x:0 , o:0});

    useEffect(() => {
        checkNoWinner();
        const currentUser = xnext ? 'o' : 'x' 
        if (playMode === 'cpu' && currentUser !== activeUser && !winner) {
            cpuNextMove(squares)
        }

    } , [xnext , winner , screen]);

    const changePlayMode = mode => {
        setplayMode(mode);
        setScreen("game");
    };

    const handleReset = ()=> {
        setSquares(new Array(9).fill(''))
        setXnext(false)
        setWinner(null)
        setWinnerLine(null)
        setActiveUser("x")
        setTies({x:0 ,o:0})
        hideModal()
        setScreen("start")
    };

    

    const handleNextRound = ()=> {
        setSquares(new Array(9).fill(''))
        setXnext(winner ==='x')
        setWinner(null)
        setWinnerLine(null)
        hideModal()
    };

    const checkWinner = (ns) => {
        const isWinner = calcWinner(ns)
            if (isWinner) {
                setWinner(isWinner.winner)
                setWinnerLine(isWinner.line)
                
                const ti = {...ties}
                ti [isWinner.winner] += 1;
                setTies(ti)
                showModal()
                setModaleMode("winner")
            }
    };

    const checkNoWinner = () => {
        const moves = squares.filter(sq => sq === "")
            if (moves.length === 0) {
                setWinner("no");
                showModal();
                setModaleMode("winner");
            }
    }

    const cpuNextMove = (sq) => {
        const bestMove = calcBestMove(sq, activeUser === "x" ? "o" : "x")
        let ns = [...squares]
        ns[bestMove] = !xnext ? "x" : "o"
        setSquares (ns)
        setXnext(!xnext)
        checkWinner(ns)
        
    }



    return (
        <GameContext.Provider 
        value={{
            screen,
            activeUser ,
            setActiveUser,
            changePlayMode,
            handleSquareClick,
            squares,
            winner,
            winnerLine,
            xnext,
            ties,
            playMode,
            handleReset ,
            handleNextRound,

        }}
        >
            {props.children}
        </GameContext.Provider>

    )
};

export {GameContext, GameState}