exports.run = (client, message, args) => {
  const fs = require("fs");
  const crit = require("./critical.json");
  const diceSide = ["one","two","three","four","five","six"];
  let resultsArray = [];
  let resultsSum = 0;
  let sumArray = "";
  
  let addOn = args[0];
  // if there is a non digit/alpha character at the front, strip it and return the value. else set value to 0 
  if (args) {
    if (/[^\d\w]/.test(args[0]) == true) {
      addOn = addOn.slice(1,addOn.length); 
    } else {
      addOn = 0;
    }
  } else {
    addOn = 0;
  }
  
  //console.log(`addon ${addOn}`);
  
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
       sumArray += 1;
     }
     if (diceSide[randNum] == "two") {
      resultsArray.push(`${twoDie}`);
       sumArray += 2;
     }
     if (diceSide[randNum] == "three") {
      resultsArray.push(`${threeDie}`);
       sumArray += 3;
     }
     if (diceSide[randNum] == "four") {
      resultsArray.push(`${fourDie}`); 
       sumArray += 4;
     }
     if (diceSide[randNum] == "five") {
      resultsArray.push(`${fiveDie}`); 
       sumArray += 5;
     }
     if (diceSide[randNum] == "six") {
      resultsArray.push(`${sixDie}`); 
       sumArray += 6;
     }
   }
  //console.log(sumArray);
  sumArray = parseInt(sumArray) + parseInt(addOn);
  
  //console.log(sumArray);
  let resultsPrint = resultsArray.join("");
  message.channel.send(`${crit[parseInt(sumArray)]}`);
  
  
}
