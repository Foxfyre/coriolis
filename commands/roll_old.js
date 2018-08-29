exports.run = (client, message, args) => {
  const fs = require("fs");
  const corRolls = JSON.parse(fs.readFileSync("./commands/corRolls.json","utf8"));
  
  let diceQty;
  let roll;
  let rollType = "";
  let resultSuccess = 0;
  let resultsArray = [];
  let resultsSum = 0;
  let diceSide = ["one","two","three","four","five","six"];
  
  const oneDie = `:one:`;
  const twoDie = `:two:`;
  const threeDie = `:three:`;
  const fourDie = `:four:`;
  const fiveDie = `:five:`;
  const sixRed = client.emojis.find("name","red6"); 
  const sixDie = `:six:`;
  
  let userId = message.member.id;
  //let userRolled = 0;
  //let userSuccesses = 0;
  //let userIndex;
  
 if (/[\d][d]/i.test(args[0]) == true && args[0] != 66) {
   diceQty = args[0].split(/[\D]/i);
   
   for (let i = 0; i < diceQty[0]; i++) {
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
   
    corRolls.map((players, index) => {
      if (players.id === message.member.id) {
        corRolls.splice(index,1);
      }
    })
   
    let entry = {
      "id": userId,
      "rolled": diceQty[0],
      "successes": resultSuccess,
    }
    corRolls.push(entry);
    fs.writeFile("./commands/corRolls.json", JSON.stringify(corRolls), (err) => console.error);
   
   let resultsPrint = resultsArray.join(" ");
   if (resultSuccess == 1) {
     message.channel.send(`<@!${message.member.id}> rolled **${resultSuccess} Success** from ${args[0]}: ${resultsPrint}`);
   } else {
   message.channel.send(`<@!${message.member.id}> rolled **${resultSuccess} Successes** from ${args[0]}: ${resultsPrint}`);
   }
 }
  
  if (/[d][66]/i.test(args[0]) == true) {
    diceQty = 2;
    
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
      resultsArray.push(`${sixDie}`); 
     }
   }
    let resultsPrint = resultsArray.join("");
    message.channel.send(`<@!${message.member.id}> rolled **${resultsPrint}**.`);
  }    
}
  

