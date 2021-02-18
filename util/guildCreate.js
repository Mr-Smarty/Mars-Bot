const config = require('$root/config.json')

module.exports = {
  execute(client, guild) {
    //Finds Top Channel of the server
    const channel = guild.channels.cache.find(
      (channel) =>
        channel.type === 'text' &&
        channel.permissionsFor(guild.me).has('SEND_MESSAGES'),
    )

    //Sends Welcome info
    channel.send({
      embed: {
        title: 'Thank You for adding Mars Bot',
        url: 'https://github.com/mebrooks01/Mars-Bot/blob/main/README.md',
        description: `Thank you for adding Mars Bot to your server. For more information use ${config.prefix}help or check out my github. https://github.com/mebrooks01/Mars-Bot/blob/main/README.md`,
        color: client.config.embed_color,
        timestamp: new Date(),
        thumbnail: {
          url: client.config.pfp,
        },
        footer: {
          text: 'Photo Credit: NASA/JPL-Caltech',
          icon_url: '',
        },
      },
    })
  },
}