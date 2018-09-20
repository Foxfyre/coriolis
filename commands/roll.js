exports.run = (client, message, args) => {
  //group arguments up to be able to break apart and use as an array, split along the "d"
  args = args.join(" ");
  let argsArray = args.split(/(\D)/i);
  let diceQty = 0;
  // if the input is a d# style, sub the blank for a 1. d6 = 1d6; else dice quantity equals the first set of digits
  
  argsArray[0] === "" ? diceQty = 1 : diceQty = argsArray[0];
  
  
  if (diceQty == 66) {
    message.channel.send(`Psst... I think you meant c:roll d66, like this...`);
    d66();
    return;
  }
  if (diceQty > 30) {
    message.channel.send("The dice limit for this bot is 30 dice. If you are seriously rolling more than that, perhaps the GM can simply let you have a Critical Success...");
    return;
  }
  
  
  //
  let diceSide = argsArray[2];
  
  // if there is no value follownig the D, the first if triggers a push roll which is syntaxed like 4d run the pushRoll function. else if the end contains a digit then runn the standard roll function. else print that there's something wrong.
  if (argsArray[2] === "") {
    pushRoll(diceQty, message);
  } else if (argsArray[2] === "66") {
    d66();
  } else if (/\d/.test(argsArray[2]) === true) {
    standard(diceQty, diceSide);
  } else {
    message.channel.send("somethings broken");
  }
  
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
    let resultsPrint = resultsArray.join(" + ");
    if (diceQty > 1) {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**. (${resultsPrint} = ${resultsSum})`);
    } else {
      message.channel.send(`<@!${message.member.id}> rolled **${resultsSum}**.`);
    }
 }
  
  function pushRoll (diceQty, message) {
    
    const fs = require("fs");
    const corRolls = require("./corRolls.json");
    
    let resultSuccess = 0;
    let resultsArray = [];
    
    diceSide = ["one","two","three","four","five","six"];

    const oneDie = `:one:`;
    const twoDie = `:two:`;
    const threeDie = `:three:`;
    const fourDie = `:four:`;
    const fiveDie = `:five:`;
    const sixRed = client.emojis.find("name","red6"); 
    const sixDie = `:six:`;
    
    let userId = message.member.id;
    // randomizes for the number of dice, pushing the code to the array to display as dice on output.
    for (let i = 0; i < diceQty; i++) {
      let randNum = Math.floor(Math.random() * (diceSide.length));
      if (diceSide[randNum] == "one") {
        resultsArray.push(`${oneDie}`); 
      }
      if (diceSide[randNum] == "two") {
        resultsArray.push(`${twoDie}`); 
      }
      if (diceSide[randNum] == "three") {
        resultsArray.push(`${threeDie}`); 
      }
      if (diceSide[randNum] == "four") {
        resultsArray.push(`${fourDie}`); 
      }
      if (diceSide[randNum] == "five") {
        resultsArray.push(`${fiveDie}`); 
      }
      if (diceSide[randNum] == "six") {
        resultsArray.push(`${sixRed.toString()}`); 
      }
      if (diceSide[randNum] == "six") {
        resultSuccess += 1; 
      }
    }
   // maps through the JSON and deletes the previous entry for the member
    corRolls.map((players, index) => {
      if (players.id === message.member.id) {
        corRolls.splice(index,1);
      }
    })
   // sets object
    let entry = {
      "id": userId,
      "rolled": diceQty,
      "successes": resultSuccess,
    }
    // pushes the entry to the json object
    corRolls.push(entry);
    // writes current json object to json file
    fs.writeFile("./commands/corRolls.json", JSON.stringify(corRolls), (err) => console.error);
   
   let resultsPrint = resultsArray.join(" ");
   if (resultSuccess == 1) {
     message.channel.send(`<@!${message.member.id}> rolled **${resultSuccess} Success** from ${diceQty}d: ${resultsPrint}`);
   } else {
   message.channel.send(`<@!${message.member.id}> rolled **${resultSuccess} Successes** from ${diceQty}d: ${resultsPrint}`);
   }
  }
    
  function d66() {
    let sumArray = [];
    
    const dieNum = [":one:",":two:",":three:",":four:",":five:",":six:"];

  // if there is a non digit/alpha character at the front, strip it and return the value. else set value to 0 
    const randRoll = side => (Math.floor(Math.random() * (side) + 1));
  
    const diceSide = 6;
  
    const roll = [randRoll(diceSide),randRoll(diceSide)];    
    
    message.channel.send(`<@!${message.member.id}> rolled ${dieNum[roll[0]-1]} ${dieNum[roll[1]-1]}.`);
  }
}
