// 250 Points 1st Try 5cognitive (old 350pints)
function maxDistance(movements) {
  function countChar(char){
    let count = 0;
    for (let i = 0; i < movements.length; i++) {
      if (movements[i] === char) {
        count++;
      }
    }

    return count;
  }

  const countJoker  = countChar("*");
  let countRight  = countChar(">");
  let countLeft   = countChar("<");

  if(countRight > countLeft){
    countRight += countJoker;
    return countRight - countLeft;
  } else{
    countLeft += countJoker;
    return countLeft - countRight;
  }
}

// 260 Points 4cognitive
function maxDistance(movements) {
  function countChar(char){
    return movements.split("").filter(move => move === char).length;
  }

  const countJoker  = countChar("*");
  let countRight  = countChar(">");
  let countLeft   = countChar("<");

  if(countRight > countLeft){
    countRight += countJoker;
    return countRight - countLeft;
  } else{
    countLeft += countJoker;
    return countLeft - countRight;
  }
}

// 260 Points
function maxDistance(movements) {
  function countChar(char){
    return movements.split("").filter(move => move === char).length;
  }
  const counts = [countChar("*"),countChar(">"), countChar("<")];
  if(counts[1] > counts[2]){
    counts[0] += counts[1];
    counts.splice(1, 1);
  } else{
    counts[0] += counts[2];
    counts.splice(2, 1);
  }

  return counts[0] - counts[1];
}