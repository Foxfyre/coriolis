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
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. Your attempt to heal this Insanity Point has failed, and it has become permanent. If you already have a Mania, increase its severity by 1, otherwise roll for a new Mania.`);
    } else {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. You heal one Insanity Point.`);
    }
 }
}