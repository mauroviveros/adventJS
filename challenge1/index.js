// 330 - 230 Points
function findFirstRepeated(gifts) {
  const reps = gifts.filter((gift, index) => gifts.indexOf(gift) !== index);
  return reps.length ? reps[0] : -1;
}

// 160 Points
function findFirstRepeated(gifts) {

  for(const [index, gift] of gifts.entries()){
    if(gifts.indexOf(gift) !== index) return gift;
  }
  return -1;
}