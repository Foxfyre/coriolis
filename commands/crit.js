const fs = require("fs");
const critroll = require("./critroll.json");
const critTable = require("./critical.json");

exports.run = (client, message, args) => {
    // if arguement contains the word switch, fire critSwitch() else standard crit() roll
    if (/(switch)/i.test(args)) {
        critSwitch();
    } else {
        crit();
    }

    function crit() {

        let sumArray = "";
        let addOn = args[0];

        const baseNum = addOn => (/[^\d\w]/.test(addOn) ? addOn.slice(1, addOn.length) : addOn = 0)
        // if there is a non digit/alpha character at the front, strip it and return the value. else set value to 0 
        if (args) {
            addOn = baseNum(addOn);
        } else {
            addOn = 0;
        }
        
        const randRoll = side => (Math.floor(Math.random() * (diceSide) + 1));

        const diceSide = 6;

        const roll = [randRoll(diceSide), randRoll(diceSide)];
        // take the array roll & convert to string
        let totalRoll = parseInt(roll.join("")) + parseInt(addOn);
        message.channel.send(`${critTable[parseInt(totalRoll)]}`);

        // if previous roll exists, delete roll from json
        critroll.map((players, index) => {
            if (players.id === message.member.id) {
                critroll.splice(index, 1);
            }
        })
        // sets object
        let entry = {
            "id": message.member.id,
            "rolled": parseInt(totalRoll),
        }
        // pushes the entry to the json object
        critroll.push(entry);
        // writes current json object to json file
        fs.writeFile("./commands/critroll.json", JSON.stringify(critroll), (err) => console.error);
    }
    function critSwitch() {
        let playerExists;
        let pushRolled;

        critroll.map((players, index) => {
            if (players.id == message.member.id) {
                pushRolled = players.rolled;
                playerExists = true;
            }
        })
        if (playerExists != true) {
            message.channel.send("Player role does not exist. 'Please type bb:cor #d' to roll");
            return;
        }
        pushRolled = pushRolled + "";
        pushRolled = pushRolled.split("").reverse().join("");
        message.channel.send(`${critTable[pushRolled]}`);
    }
}