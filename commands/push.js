exports.run = (client, message, args) => {
  const fs = require("fs");
  const corRolls = JSON.parse(fs.readFileSync("./commands/corRolls.json","utf8"));
  
  //let diceQty;
  //let roll;
  //let rollType = "";
  let resultSuccess = 0;
  //let resultsArray = [];
  //let resultsSum = 0;
  let diceSide = ["one","two","three","four","five","six"];
  
  const oneDie = `:one:`;
  const twoDie = `:two:`;
  const threeDie = `:three:`;
  const fourDie = `:four:`;
  const fiveDie = `:five:`;
  const sixRed = client.emojis.find("name","red6"); 
  const sixDie = `:six:`;
  
  let userId = message.member.id;
  let userRolled = 0;
  let userSuccesses = 0;
  let userIndex;
  
    let pushRolled = 0;
    let pushSuccess = 0;
    let pushToRoll = 0;
    let keptArray = [];
    let pushArray = [];
    let playerExists;
    let pushPlus = 0;
  
    // if there is a non digit/alpha character at the front, strip it and return the value. else set value to 0 
  if (/[^\d\w]/.test(args[0]) == true) {
    args[0] = args[0].slice(1,args[0].length); 
  }
    
    if (args[0] == undefined) {  
      pushPlus = 0;
    } else if (args[0] > 0) {
      pushPlus = parseInt(args[0]);
    }
    
    // get previous roll information from json and set. if player doesnt exist return message
    corRolls.map((players, index) => {
      if (players.id == message.member.id) {
        pushRolled = players.rolled;
        pushSuccess = players.successes;
        playerExists = true;
      }
    })
    
    if (playerExists != true) {
      message.channel.send("Player role does not exist. 'Please type bb:cor #d' to roll");
      return;
    }
    
    pushToRoll = (pushRolled - pushSuccess) + pushPlus;
    let baseRoll = pushRolled - pushSuccess;
    for (let i = 0; i < pushSuccess; i++) {
      keptArray.push(`${sixRed.toString()}`);
    }
    for (let i = 0; i < (pushToRoll); i++) {
     let randNum = Math.floor(Math.random() * (diceSide.length));
     if (diceSide[randNum] == "one") {
      pushArray.push(`${oneDie}`); 
     }
     if (diceSide[randNum] == "two") {
      pushArray.push(`${twoDie}`); 
     }
     if (diceSide[randNum] == "three") {
      pushArray.push(`${threeDie}`); 
     }
     if (diceSide[randNum] == "four") {
      pushArray.push(`${fourDie}`); 
     }
     if (diceSide[randNum] == "five") {
      pushArray.push(`${fiveDie}`); 
     }
     if (diceSide[randNum] == "six") {
      pushArray.push(`${sixRed.toString()}`); 
     }
     if (diceSide[randNum] == "six") {
       resultSuccess += 1; 
     }
    }
    //let resultsPrint = pushArray.join("");
    if (pushPlus > 0 && pushSuccess > 0) {
      message.channel.send(`<@!${message.member.id}> pushed the roll, holding ${keptArray.join(" ")} & rerolling ${baseRoll}d + ${args[0]}d: ${pushArray.join(" ")}`);
    } else if (pushPlus > 0 && pushSuccess == 0) {
      message.channel.send(`<@!${message.member.id}> pushed the roll, rerolling ${baseRoll}d + ${args[0]}d: ${pushArray.join(" ")}`);
    } else if (pushPlus == 0 && pushSuccess > 0) {
      message.channel.send(`<@!${message.member.id}> pushed the roll, holding ${keptArray.join(" ")} & rerolling ${baseRoll}d: ${pushArray.join(" ")} \nFinal Result: **${pushSuccess + resultSuccess} Success(es)**`);
    } else if (pushPlus == 0 && pushSuccess == 0) {
      message.channel.send(`<@!${message.member.id}> pushed the roll, rerolling ${baseRoll}d: ${pushArray.join(" ")}`);
    }
}

    

  

