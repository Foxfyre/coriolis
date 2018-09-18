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
    switch(resultsSum) {
      case 1:
        message.channel.send("1: PHOBIA. The PC becomes terrified and runs away from the source of the fear.");
        break;
      case 2:
        message.channel.send("2: COMPULSION. The PC compulsively performs a specific action in certain situations.");
        break;
      case 3:
        message.channel.send("3: MELANCHOLY. The PC feels that there is no point to existence, becoming fearless as she has nothing to lose by dying.");
        break;
      case 4:
        message.channel.send("4: SPIRITUAL RUPTURE. The PC’s soul is torn, and she can hear voices and spirits whispering and hissing, telling her what to do.");
        break;
      case 5:
        message.channel.send("5: WAKING SLEEP. The PC sits apathetic, just staring at the wall. She does nothing and stops eating.");
        break;
      case 6:
        message.channel.send("6: MURDEROUS RAGE. The PC becomes raving mad and tries to kill everyone around her, but she retains the ability to act rationally in pursuit of her murderous goals.");
        break;
      }
                 
 }
  
}

