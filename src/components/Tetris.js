import React, { useState } from "react";

import { createEtap, checkCollision } from "../gameHelpers";
import { StyledTetrisWrapp, StyledTetris } from "./styles/StyledTetris";

// Wlasnie hook'i
import { useInterval } from "../hooks/useInterval";
import { usePlayer } from "../hooks/usePlayer";
import { useEtap } from "../hooks/useEtap";
import { useGameStatus } from "../hooks/useGameStatus";

// Komponenty
import Etap from "./Etap";
import Pokaz from "./Pokaz";
import PrzyciskStart from "./PrzyciskStart";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  //korzystanie z hook'ów i metod z "useEtap" i "usePlayer"
  const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
  const [stage, setStage, rowsCleared] = useEtap(player, resetPlayer);
  const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
    rowsCleared
  );

  console.log("re-render");
  //funkcja odpowiadajaca za ruchy gracza
  const movePlayer = (dir) => {
    if (!checkCollision(player, stage, { x: dir, y: 0 })) {
      updatePlayerPos({ x: dir, y: 0 });
    }
  };

  const keyUp = ({ keyCode }) => {
    if (!gameOver) {
      // Activate the interval again when user releases down arrow.
      if (keyCode === 40) {
        setDropTime(1000 / (level + 1));
      }
    }
  };
  //funkcja zaczynajaca gre
  const startGame = () => {
    //przy wywolywaniu tej funkcji wszystko się resetuje i zaczyna od nowa
    setStage(createEtap());
    setDropTime(1000);
    resetPlayer();
    setScore(0);
    setLevel(0);
    setRows(0);
    setGameOver(false);
  };
  // funkcja odpowiada za spadanie
  const drop = () => {
    //podnosi level, gdy gracz zdobędzie 10 wierszy
    if (rows > (level + 1) * 10) {
      setLevel((prev) => prev + 1);
      // zwieksza predkosc spadania klockow
      setDropTime(1000 / (level + 1) + 200);
    }

    if (!checkCollision(player, stage, { x: 0, y: 1 })) {
      updatePlayerPos({ x: 0, y: 1, collided: false });
    } else {
      // tutaj nastepuje koniec gry
      if (player.pos.y < 1) {
        console.log("Koniec gry");
        setGameOver(true);
        setDropTime(null);
      }
      updatePlayerPos({ x: 0, y: 0, collided: true });
    }
  };
  //funkcja odpowiadajaca za przyspieszenie klocka, pod wplywem nacisniecia strzalki w dol przez gracza
  const dropPlayer = () => {
    //nastepuje dezaktywowanie interwału, przy przytrzymanym klawiszu
    setDropTime(null);
    drop();
  };

  //zaczecie gry, hook stworzony przez "Dan Abramov"
  useInterval(() => {
    drop();
  }, dropTime);
  //funkcja obslugujaca przyciski
  const move = ({ keyCode }) => {
    if (!gameOver) {
      if (keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1);
      } else if (keyCode === 40) {
        dropPlayer();
      } else if (keyCode === 38) {
        playerRotate(stage, 1);
      }
    }
  };

  return (
    //tworzenie struktury aplikacji
    <StyledTetrisWrapp
      role='button'
      tabIndex='0'
      onKeyDown={(e) => move(e)}
      onKeyUp={keyUp}
    >
      <StyledTetris>
        <Etap stage={stage} />
        <aside>
          {/* instrukcja warunkowa sprawdzająca, czy gra jest skonczona */}
          {gameOver ? (
            <Pokaz gameOver={gameOver} text='Koniec gry' />
          ) : (
            <div>
              <Pokaz text={`Wynik: ${score}`} />
              <Pokaz text={`Wiersze: ${rows}`} />
              <Pokaz text={`Level: ${level}`} />
            </div>
          )}
          <PrzyciskStart callback={startGame} />
        </aside>
      </StyledTetris>
    </StyledTetrisWrapp>
  );
};

export default Tetris;
