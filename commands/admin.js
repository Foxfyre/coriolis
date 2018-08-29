exports.run = (client, message, args) => {
  if (args[0] == "servers") {
    
    message.channel.send(`Coriolis Bot is active in ${client.guilds.size} server(s). which are as follows:`);    
    client.guilds.map((guilds) => {
      message.channel.send(`${guilds.name} owned by <@!${guilds.owner.id}>`);
    })
  }
}
  
/*
test.members.forEach(function(guildMember, guildMemberId) {
   console.log(guildMemberId, guildMember.user.username);
})*/