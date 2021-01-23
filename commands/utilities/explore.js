const { Command } = require("discord.js-commando");
const moment = require("moment");
const config = require("./../../config.json");
module.exports = class NAME extends Command {
  constructor(client) {
    super(client, {
      name: "explore",
      group: "utilities",
      aliases: ["missions", "mission"],
      memberName: "explore",
      description: "Look at all the missions to mars and where they are",
      examples: [`${config.prefix}explore`],
      guildOnly: false,
      ownerOnly: false,
      throttling: {
        usages: 2,
        duration: 1,
      },
    });
  }
  run(message) {
    message.embed({
      title: "Explore all the NASA missions",
      url: "https://mars.nasa.gov/explore/mars-now/",
      description:
        "You can see where all the missions are here\nhttps://mars.nasa.gov/explore/mars-now/",
      color: "#5A2017",
      image: {
        url:
          "https://mars.nasa.gov/system/resources/detail_files/7929_Viking_76-full2.jpg",
      },
      footer: {
        text: "Photo Credit: NASA/JPL-Caltech",
        icon_url: "",
      },
    });
  }
};