const findPairs = (evaluationArray, sum) => {
  evaluationArray.sort((a, b) => a - b);
  let a = 0;
  let b = evaluationArray.length - 1;
  while (a < b) {
    if (evaluationArray[a] + evaluationArray[b] === sum) {
      console.log(`${evaluationArray[a]},${evaluationArray[b]}`);
      a++;
    }
    else if (evaluationArray[a] + evaluationArray[b] < sum) 
      a++;
    else 
      b--;
  }
}

findPairs([1, 5, 9, 0, 20, -4, 12, 16, 7], 12);
