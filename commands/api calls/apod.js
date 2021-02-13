const { Command } = require('discord.js-commando')
const axios = require('axios')
const moment = require('moment')

const config = require('$root/config.json')

module.exports = class APOD extends Command {
  //Commando Info Export
  constructor(client) {
    super(client, {
      name: 'apod',
      group: 'api calls',
      memberName: 'apod',
      description:
        'Every day NASA publishes an "Astronomy Picture of the Day" use this command to see todays',
      examples: [`${config.prefix}apod`],
      clientPermissions: ['EMBED_LINKS'],
      throttling: client.config.command_throttling.api,
    })
  }

  //Code To Run
  run(message) {
    let apod_date = moment().utcOffset(-12).format('YYYY-M-D')

    axios
      .get(
        //NASA APOD API
        `https://api.nasa.gov/planetary/apod?date=${apod_date}&api_key=${config.api_key}`,
      )
      .then((res) => {
        //Send Embed To Channel
        message.embed({
          title: res.data.title,
          url: res.data.url,
          description: res.data.explanation,
          color: this.client.config.embed_color,
          timestamp: new Date(),
          image: {
            url: res.data.url,
          },
          footer: {
            text: `Photo Credit: ${res.data.copyright}`,
            icon_url: '',
          },
        })
      })
      .catch(function (error) {
        message.reply(
          //API error catch
          `An API error has occurred: ${error}\nFor help solving this problem please join are support server: ${config.invite}`,
        )
      })
  }
}
