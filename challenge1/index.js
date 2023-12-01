// 330 - 230 Points
function findFirstRepeated(gifts) {
  const reps = gifts.filter((gift, index) => gifts.indexOf(gift) !== index);
  return reps.length ? reps[0] : -1;
}