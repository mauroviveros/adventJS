// 280 Points ⚠️ It's hard to read
function findNaughtyStep(original, modified) {
  let naughty = "";
  if(original === modified) return naughty;
  const length = Math.max(original.length, modified.length);

  for(let i = 0; i < length; i++){
    if(original[i] !== modified[i]) return naughty += length === original.length ? original[i] : modified[i];
  }
}

// 250 Points 
function findNaughtyStep(original, modified) {
  if(original === modified) return "";
  let wrapper = [original, modified].sort((a, b) => b.length - a.length);
  for(let i = 0; i < wrapper[0].length; i++){
    if(wrapper[0][i] !== wrapper[1][i]) return wrapper[0][i];
  }
}

// 350 Points (occasionally)
function findNaughtyStep(original, modified) {
  if(original === modified) return "";
  const length = Math.max(original.length, modified.length);

  for(let i = 0; i < length; i++){
    if(original[i] !== modified[i]){
      return length === original.length ? original[i] : modified[i];
    }
  }
}