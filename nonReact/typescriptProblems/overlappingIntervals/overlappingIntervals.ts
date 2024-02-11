const overlappingIntervals = (intArray: number[][]) => {
  const sortedByFirstNumber = intArray.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < sortedByFirstNumber.length; i++) {
    if (
      sortedByFirstNumber[i][0] <= sortedByFirstNumber[i + 1][1] &&
      sortedByFirstNumber[i][0] >= sortedByFirstNumber[i + 1][0]
    )
      sortedByFirstNumber.splice(i, 1, [
        sortedByFirstNumber[i][0],
        sortedByFirstNumber[i + 1][1],
      ]);
  }

  const sortedByLastNumber = intArray.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sortedByLastNumber.length; i++) {
    if (
      sortedByLastNumber[i][1] >= sortedByLastNumber[i + 1][0] &&
      sortedByLastNumber[i][1] <= sortedByLastNumber[i + 1][1]
    )
      sortedByLastNumber.splice(i, 1, [
        sortedByLastNumber[i][0],
        sortedByLastNumber[i + 1][1],
      ]);
  }

  return sortedByLastNumber;
};
//correctedVersion
function mergeIntervals(intervals) {
  // Sort intervals based on the start time
  intervals.sort((a, b) => a[0] - b[0]);

  // The result array
  const merged = [];

  for (let i = 0; i < intervals.length; i++) {
    // If the result array is empty or if the current interval does not overlap with the previous, simply append it.
    if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
      merged.push(intervals[i]);
    } else {
      // There's an overlap, so we merge the current and previous intervals.
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      );
    }
  }

  return merged;
}

// for(let i = 0; i < intArray.length; i++){
//         for(let j=i+1;j <intArray.length;j++){
//             const newArray:number[] = [];
//             if(intArray[i][0] >= intArray[j][0] && intArray[i][0] < intArray[j][1]){
//                 newArray.push(intArray[i][0]);

//             }
//             if(intArray[i][1] <= intAray[i][0])
//         }
//     }
// }
