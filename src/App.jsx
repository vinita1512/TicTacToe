import React, { useEffect, useState } from "react";
import Square from "./Square";
import "./App.css";
import { GiPartyPopper } from "react-icons/gi";
import { FaRegSmile } from "react-icons/fa";
const App = () => {
  const initialState = Array(9).fill("");
  const [gameState, setGameState] = useState(initialState);
  const [step, setStep] = useState(0);
  const [isWinner, setIsWinner] = useState(null);
  const [userChoice, setUserChoice] = useState(null);

  useEffect(() => {
    winner(gameState);
  }, [gameState]);

  // onclick handler of board
  const clickHandler = (e) => {
    if (!e.target.innerText && isWinner === null) {
      const copyGameState = [...gameState];
      copyGameState[e.target.id] =
        step % 2 === 0 ? userChoice : opponentChoice(userChoice);

      setStep(step + 1);
      setGameState(copyGameState);
    }
  };

  const choiceHandler = (choice) => {
    setUserChoice(choice);
    setStep(0);
    setIsWinner(null);
    setGameState(initialState);
  };

  const opponentChoice = (userChoice) => {
    return userChoice === "X" ? "O" : "X";
  };

  const winner = (gameState) => {
    const winningConditions = [
      // vertical
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      // horizontal
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      // diagonal
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningConditions.forEach((condition) => {
      const [a, b, c] = condition;
      if (
        gameState[a] &&
        gameState[a] === gameState[b] &&
        gameState[a] === gameState[c]
      ) {
        setIsWinner(gameState[a]);

        return;
      }
    });

    // draw condition
    if (!isWinner && step >= 9) {
      setIsWinner((prevWinner) => (prevWinner === null ? "Draw" : prevWinner));
    }
  };

  const reset = () => {
    setGameState(initialState);
    setStep(0);
    setUserChoice(null);
    setIsWinner(null);
  };

  return (
    <>
      {/* title */}

      <div className="titleofgame underline">Welcome to TICTACTOE Game !</div>
      {/* userchoice between x and 0 */}
      {userChoice === null ? (
        <div className="choose-game ">
          <button
            className="choice-button"
            onClick={() => {
              choiceHandler("X");
            }}
          >
            {" "}
            choose X{" "}
          </button>
          <button
            className="choice-button"
            onClick={() => {
              choiceHandler("0");
            }}
          >
            {" "}
            choose 0{" "}
          </button>
        </div>
      ) : (
        " "
      )}

      {/*div for display player x and 0  */}
      <div className="flex md:flex-row sm-200:flex-col">
        <div>
          {userChoice && (
            <div className="mt-9 pl-40 resetbtn">
              <button className="choice-button" onClick={reset}>
                Reset Game
              </button>
            </div>
          )}
          {userChoice && (
            <div className="players md:ml-36 sm-200:ml-10">
              <div className={`player  ${step % 2 === 0 && "player-x"} `}>
                {userChoice === "X" ? "Player X" : "Player O"}
              </div>

              <div className={`player ${step % 2 === 1 && "player-0"} `}>
                {userChoice === "X" ? "Player O" : "Player X"}
              </div>
            </div>
          )}
          {/* board */}
          {userChoice ? (
            <div
              className="game-wrapper md:ml-36 sm-200:ml-10"
              onClick={clickHandler}
            >
              <Square
                id={0}
                state={gameState[0]}
                userChoicecolor={userChoice}
                className="border-right-bottom"
              />
              <Square
                id={1}
                state={gameState[1]}
                userChoicecolor={userChoice}
                className="border-right-bottom"
              />
              <Square
                id={2}
                state={gameState[2]}
                userChoicecolor={userChoice}
                className="border-bottom"
              />
              <Square
                id={3}
                state={gameState[3]}
                userChoicecolor={userChoice}
                className="border-right-bottom"
              />
              <Square
                id={4}
                state={gameState[4]}
                userChoicecolor={userChoice}
                className="border-right-bottom"
              />
              <Square
                id={5}
                state={gameState[5]}
                userChoicecolor={userChoice}
                className="border-bottom"
              />
              <Square
                id={6}
                state={gameState[6]}
                userChoicecolor={userChoice}
                className="border-right"
              />
              <Square
                id={7}
                state={gameState[7]}
                userChoicecolor={userChoice}
                className="border-right"
              />
              <Square
                id={8}
                state={gameState[8]}
                userChoicecolor={userChoice}
              />
            </div>
          ) : (
            " "
          )}
        </div>

        <div className="md:mt-10 sm-200:ml-10">
          {isWinner && (
            <div className="w-300 mt-28 h-60 bg-slate-400  border-4 shadow-inner shadow-black flex flex-col justify-center items-center">
              {isWinner === "Draw" ? (
                <FaRegSmile className=" iswinnericon " />
              ) : (
                <GiPartyPopper className="iswinnericon" />
              )}
              <span className="font-serif text-5xl text-fuchsia-950">
                {isWinner === "Draw" ? "It's a Draw" : `${isWinner} Win!`}
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
