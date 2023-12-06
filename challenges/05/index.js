function cyberReindeer(road, time) {
    const emptyRoad = road.replace("S", ".");
    const result = [];
  
    let position = 0;
  
    for(let i = 0; i < time; i++){
      const useRoad = (i >= 5) ? emptyRoad.replaceAll("|", "*") : emptyRoad;
      if(emptyRoad[position] === "|" && i < 5) position--;
      let newRoad = useRoad.substring(0, position);
      newRoad += "S" + useRoad.substring(position + 1);
      result.push(newRoad);
      position++;
    }
    
    return result;
  }