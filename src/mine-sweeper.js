const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  // Get the dimensions of the input matrix
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Initialize an empty result matrix with the same dimensions as the input matrix
  const result = Array.from({ length: rows }, () => Array(cols).fill(0));

  // Define a helper function to check if a cell is within bounds
  const isInBounds = (row, col) => row >= 0 && row < rows && col >= 0 && col < cols;

  // Define the possible neighboring cell offsets
  const offsets = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  // Loop through each cell in the input matrix
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      // If the current cell contains a mine
      if (matrix[row][col]) {
        // Loop through each neighboring cell offset
        for (const [rowOffset, colOffset] of offsets) {
          // Calculate the neighboring cell position
          const newRow = row + rowOffset;
          const newCol = col + colOffset;

          // If the neighboring cell is within bounds, increment its count in the result matrix
          if (isInBounds(newRow, newCol)) {
            result[newRow][newCol]++;
          }
        }
      }
    }
  }

  // Return the result matrix
  return result;
}


module.exports = {
  minesweeper
};
