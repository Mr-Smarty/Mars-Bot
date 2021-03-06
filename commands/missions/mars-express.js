const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class MarsExpress extends Command {
  constructor(client) {
    super(client, {
      name: 'mars-express',
      group: 'missions',
      aliases: ['mars express'],
      memberName: 'mars-express',
      description: 'Find Information on the Mars Express mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.missions
    })
  }

  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.missions.express

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
