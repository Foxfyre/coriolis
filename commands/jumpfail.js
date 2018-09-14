  const fs = require("fs");
  const jump = require("./jumpfail.json");

exports.run = (client, message, args) => {
  let sumArray = "";
  let addOn = args[0];
  
  const baseNum = addOn => ( /[^\d\w]/.test(addOn) ? addOn.slice(1,addOn.length) : addOn = 0)
  // if there is a non digit/alpha character at the front, strip it and return the value. else set value to 0 
  if (args) {
    addOn = baseNum(addOn);
  } else {
    addOn = 0;
  }
  
  const randRoll = side => (Math.floor(Math.random() * (diceSide) + 1));
  
  const diceSide = 6;
  
  const roll = [randRoll(diceSide),randRoll(diceSide)];
  
  sumArray = roll.join("");
  let totalRoll = parseInt(sumArray) + parseInt(addOn);
  message.channel.send(`${jump[parseInt(totalRoll)]}`);
}