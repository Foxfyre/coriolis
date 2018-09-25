exports.run = (client, message, args) => {

standard(args[0],6);


  function standard (diceQty, diceSide) {
   let resultsArray = [];
   let resultsSum = 0;
    let radDmg = 0;
    // roll the dice, iterates through for diceQty
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
      if (randNum === 6) {
        radDmg += 1;
      }
    }
    
    let radArray = resultsArray.join(", ");
    // After for loop...
    if (radDmg > 0) {
      message.channel.send(`<@!${message.member.id}> rolled ${radArray}, taking ${radDmg} point(s) of damage.`);
    } else {
      message.channel.send(`<@!${message.member.id}> rolled ${radArray}, suffering no damage.`);
    }
 }
}