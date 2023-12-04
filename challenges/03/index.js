// 280 Points ⚠️ It's hard to read.
function findNaughtyStep(original, modified) {
  let naughty = "";
  if(original === modified) return naughty;
  const length = Math.max(original.length, modified.length);

  for(let i = 0; i < length; i++){
    if(original[i] !== modified[i]) return naughty += length === original.length ? original[i] : modified[i];
  }
}