const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class ExoMars extends Command {
  constructor(client) {
    super(client, {
      name: 'exomars',
      group: 'missions',
      aliases: ['exo mars'],
      memberName: 'exomars',
      description: 'Find Information on the exo mars mission',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.missions
    })
  }

  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.missions.exomars

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
