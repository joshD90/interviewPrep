const wordSearch = (board: string[][], word: string): boolean => {
  for (let i = 0; i < board.length - 1; i++) {
    if (board[i].includes(word[0])) {
      if (searchAcross(board[i], word)) return true;
      const indexOfStartingLetter = board[i].indexOf(word[0]);
      if (compileStringDownwards(board, indexOfStartingLetter).includes(word))
        return true;
    }
  }
};

const searchAcross = (row: string[], word: string): boolean => {
  const rowString = row.join("");
  if (rowString.includes(word)) return true;
  return false;
};

const compileStringDownwards = (board: string[][], index: number): string => {
  return board.map((charArray) => charArray[index]).join("");
};
