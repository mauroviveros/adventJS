function decode(message) {
    const regex = /\(([^()]+)\)/g;
  
    while(regex.test(message)){
      message.match(regex).forEach(match => {
        const reverse = match.slice(1, -1).split("").reverse().join("");
        message = message.replace(match, reverse);
      });
    }
    return message;
  }