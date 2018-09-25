exports.run = (client, message, args) => {

standard(1,6);


  function standard (diceQty, diceSide) {
   let resultsArray = [];
   let resultsSum = 0;
    // roll the dice, iterates through for diceQty
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide)) + 1;
      resultsArray.push(randNum);
      resultsSum += randNum;
    }
    // After for loop...
    if (resultsSum === 1) {
      message.channel.send(`<@!${message.member.id}> rolled **1**. You failed to heal the Insanity Point, and it has become permanent.`);
    } else {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. You heal one Insanity Point.`);
    }
 }
}