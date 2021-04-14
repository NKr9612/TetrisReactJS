export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createEtap = () =>
  Array.from(Array(STAGE_HEIGHT), () => Array(STAGE_WIDTH).fill([0, "clear"]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
  // Takie rozwiązanie też dziala
  // return player.tetromino.some((row, y) =>
  //   row.some((cell, x) => {
  //     if (cell !== 0) {
  //       return (
  //         !stage[y + player.pos.y + moveY] ||
  //         !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
  //         stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
  //           'clear'
  //       );
  //     }
  //     return false;
  //   })
  // );

  // używanie pętli (nie działa forEach)
  for (let y = 0; y < player.tetromino.length; y += 1) {
    for (let x = 0; x < player.tetromino[y].length; x += 1) {
      // 1. Sprawdzanie, czy jesteśmy na odpowiednim klocku
      if (player.tetromino[y][x] !== 0) {
        if (
          // 2. Sprawdzanie czy nasz ruch jest wewnątrz obszaru height (y)
          // Tak, żeby nie przeszedł przez dno
          !stage[y + player.pos.y + moveY] ||
          // 3.Sprawdzanie, czy ruch jest wewnątrz obszaru width (x)
          !stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
          // 4. Sprawdzanie, czy komórka do której wędruje klocek nie jest wyczyszczona
          stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !==
            "clear"
        ) {
          return true;
        }
      }
    }
  }
  // 5.Jeśli wszystko jest fałszem
  return false;
};
