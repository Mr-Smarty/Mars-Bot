const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'polar-lander',
      group: 'missions',
      aliases: ['polar lander', 'deep space', 'deep-space'],
      memberName: 'polar-lander',
      description: 'Find Information on the Mars Polar Lander/Deep Space 2 mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.missions
    })
  }

  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.missions.polar

    message.embed({
      title: info.title,
      url: info.url,
      description: info.info,
      color: config.embed_color,
      timestamp: new Date(),
      image: { url: info.img },
      footer: { text: mission.credit }
    })
  }
}
