// 190 Points 1 cognitive
function drawGift(size, symbol) {
    let bgSize = size - 2
    bgSize += +!(bgSize + 1)
  
    const responses = ["", "", ""];
  
    for (const a of [...Array.from({ length: bgSize }).keys()]) {
      const c = "#"
        + symbol.repeat(bgSize)
        + "#" + symbol.repeat(a) + "#"
      responses[2] = c + "\n" + responses[2]
      responses[1] += " ".repeat(bgSize - a) + c + "\n"
    }
  
    responses[0] = " ".repeat(size - 1) + "#".repeat(size) + "\n"
      + (responses[1]
        + "#".repeat(size) + symbol.repeat(bgSize) + "#" + "\n"
        + responses[2]
        + "#".repeat(size) + "\n").repeat(+!!(size - 1))
  
    return responses[0];
  }