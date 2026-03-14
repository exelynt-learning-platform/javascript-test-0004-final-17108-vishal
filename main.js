function printMatrixPattern(n) {
  // The total size of the grid will be 2n - 1
  const size = 2 * n - 1;

  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      // Find the minimum distance to the top, left, bottom, or right edge
      let top = i;
      let left = j;
      let bottom = size - 1 - i;
      let right = size - 1 - j;
      
      let minDistance = Math.min(top, left, bottom, right);
      
      // The value at this position is 'n' minus its distance from the edge
      let value = n - minDistance;
      row += value + " ";
    }
    // Print the constructed row
    console.log(row.trimEnd());
  }
}

// Call the function with 4 to print the specific pattern from the image
printMatrixPattern(4);
