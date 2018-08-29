exports.run = (client, message, args) => {

  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Help",
    description: "These are the current help topics for the Coriolis bot.",
    fields: [{
        name: "roll",
        value: "'c:roll #d' where # is the quantity of dice to roll. 'c:roll d66' gives you a roll of a d66, which is just 2d6, not summed."
      },
      {
        name: "push",
        value: "c:push / c:push #. Push is used for when you decide to push a roll. It will take the 6's from your previous roll, if any, and reroll the non 6 values. Push #, works like push +#. As with standard push, but adding the amount of dice equal to the value you declare."
      },
      {
        name: "push",
        value: "c:push / c:push #. Push is used for when you decide to push a roll. It will take the 6's from your previous roll, if any, and reroll the non 6 values. Push #, works like push +#. As with standard push, but adding the amount of dice equal to the value you declare."
      },
    ],
    timestamp: new Date(),
  }
});
}