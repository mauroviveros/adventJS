// 270 Points
function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    return gift.split("").every(char => materials.includes(char))
  });
}

// 270 Points [Solution 2]
function manufacture(gifts, materials) {
  return gifts.filter(gift => {
    for(const char of gift.split("")){
      if(!materials.includes(char)) return false;
    }
    return true;
  });
}


// ChatGPT Solution - 260 Points
function manufacture(gifts, materials) {
  // Función auxiliar para verificar si se pueden fabricar los regalos
  function canManufactureGift(gift, materials) {
    // Iterar sobre cada caracter del regalo
    for (const char of gift) {
      // Verificar si el caracter no está en los materiales
      if (!materials.includes(char)) {
        // Si un caracter no está presente, el regalo no se puede fabricar
        return false;
      }
    }

    // Si todos los caracteres están presentes, el regalo se puede fabricar
    return true;
  }
  // Crear un array para almacenar los regalos fabricados
  const manufacturedGifts = [];

  // Iterar sobre cada regalo en la lista
  for (const gift of gifts) {
    // Verificar si todos los caracteres del regalo están en los materiales
    if (canManufactureGift(gift, materials)) {
      // Si es así, agregar el regalo a la lista de regalos fabricados
      manufacturedGifts.push(gift);
    }
  }

  // Devolver la lista de regalos fabricados
  return manufacturedGifts;
}