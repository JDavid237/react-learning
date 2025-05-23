 import { WINNER_COMBS } from "../contanst"
 
 export const checkWinner = (boardToCheck) => {
    for (const comb of WINNER_COMBS) {
      const [a, b, c] = comb
      if (boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]) {
        return boardToCheck[a]
      }
    }
    return null
  }

export const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square !== null)
}