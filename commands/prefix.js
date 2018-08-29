/*exports.run = (client, message, args, config, fs) => {
    if (message.author.id !== config.ownerID) {
        message.channel.send("You aren't the boss of me " + message.author.username + "!");
        return;
    } else {
        message.channel.send(args);
        let newPrefix = message.content.split(" ").slice(1, 2)[0];
        config.prefix = newPrefix;
        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
        message.channel.send("Prefix now set to " + config.prefix + ". This will revert back to the default 'bb:' upon restart");
    };
}


//exports.run = (client, message, args) => {
//    message.channel.send("success").catch(console.error);
//}*/