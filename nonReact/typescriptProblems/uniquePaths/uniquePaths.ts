// You are given a grid of size m x n, where each cell represents a position you can move to. Starting from the top-left cell, your goal is to reach the bottom-right cell while moving only right or down. You can assume that the grid does not contain any obstacles.

// Write a function uniquePaths(m, n) that calculates the number of unique paths from the top-left cell to the bottom-right cell.

const uniquePaths = (height: number, width: number): void => {
  //starting at the top left cell
  const startingPosH = 0;
  const startingPosW = 0;

  //we want to end with pos at height and width number
  //we can travel down and right only

  //all down and then all right
  //will they always have the same number of moves down and right?
  //so what we are trying to get is the number of ways that we can arrange 'down' and 'right' into an array such that there are no repeats and all the downs = height and all the heights = width
};
