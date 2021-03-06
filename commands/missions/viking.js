const { Command } = require('discord.js-commando')
const config = require('$root/config.json')
const mission = require('$root/mission.json')

module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: 'viking',
      group: 'missions',
      aliases: ['viking 1', 'viking 2'],
      memberName: 'viking',
      description: 'Find Information on the Viking 1 & 2 missions',
      clientPermissions: ['EMBED_LINKS'],
      throttling: config.command_throttling.missions
    })
  }

  run(message) {
    this.client.cmdCount.run(this.name, this.group, message)
    let info = mission.missions.mro

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
