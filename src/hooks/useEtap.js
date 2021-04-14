import { useState, useEffect } from "react";
//importowanie "createEtap"
import { createEtap } from "../gameHelpers";

export const useEtap = (player, resetPlayer) => {
  //przekazanie funkcji, jako argumentu oraz zainicjalizowanie etapu początkowego - czystej siatki
  const [stage, setEtap] = useState(createEtap());
  const [rowsCleared, setRowsCleared] = useState(0);

  useEffect(() => {
    setRowsCleared(0);
    const sweepRows = (newStage) =>
      newStage.reduce((ack, row) => {
        if (row.findIndex((cell) => cell[0] === 0) === -1) {
          setRowsCleared((prev) => prev + 1);
          ack.unshift(new Array(newStage[0].length).fill([0, "clear"]));
          return ack;
        }
        ack.push(row);
        return ack;
      }, []);

    const updateEtap = (prevStage) => {
      const newStage = prevStage.map((row) =>
        row.map((cell) => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      //rysowanie tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              value,
              `${player.collided ? "merged" : "clear"}`,
            ];
          }
        });
      });
      // Sprawdzanie, czy mamy wynik po "collided"
      if (player.collided) {
        resetPlayer();
        return sweepRows(newStage);
      }
      return newStage;
    };

    //Aktualizacje
    setEtap((prev) => updateEtap(prev));
  }, [
    player.collided,
    player.pos.x,
    player.pos.y,
    player.tetromino,
    resetPlayer,
  ]);

  return [stage, setEtap, rowsCleared];
};
