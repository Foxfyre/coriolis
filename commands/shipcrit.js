exports.run = (client, message, args) => {
  const fs = require("fs");
  //const shcrit = JSON.parse(fs.readFileSync("./commands/shipCritical.json","utf8"));
  const shcrit = require("./shipCritical.json");
  //const name = require("./name.json");
  const diceSide = ["one","two","three","four","five","six"];
  let resultsArray = [];
  let resultsSum = 0;
  
  const oneDie = `:one:`;
  const twoDie = `:two:`;
  const threeDie = `:three:`;
  const fourDie = `:four:`;
  const fiveDie = `:five:`;
  const sixDie = `:six:`;
  
  for (let i = 0; i < 2; i++) {
     let randNum = Math.floor(Math.random() * (diceSide.length));
     if (diceSide[randNum] == "one") {
      resultsArray.push(`${oneDie}`);
      resultsSum += 1;
     }
     if (diceSide[randNum] == "two") {
      resultsArray.push(`${twoDie}`); 
       resultsSum += 2;
     }
     if (diceSide[randNum] == "three") {
      resultsArray.push(`${threeDie}`); 
       resultsSum += 3;
     }
     if (diceSide[randNum] == "four") {
      resultsArray.push(`${fourDie}`);
       resultsSum += 4;
     }
     if (diceSide[randNum] == "five") {
      resultsArray.push(`${fiveDie}`); 
       resultsSum += 5;
     }
     if (diceSide[randNum] == "six") {
      resultsArray.push(`${sixDie}`); 
       resultsSum += 6;
     }
   }
  
  let resultsPrint = resultsArray.join("");
  message.channel.send(`${shcrit[resultsSum]}`);
  
}