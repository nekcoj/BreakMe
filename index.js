const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

const fs = require("fs");
const discordkey = require("./discordkey.json");

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

client.once("ready", () => {
  console.log("BreakMe online!");
});

client.on("message", message => {
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if(command === "ping"){
    client.commands.get("ping").execute(message, args);
  } else if(command === "timer"){
    client.commands.get("timer").execute(message, args);
  } else if (command === "help"){
    message.channel.send("Commands:\n")
    client.commands.forEach(command => {
      message.channel.send(`Name: ${command.name}\nDescription: ${command.description}\n`)
    });
  } else {
    message.channel.send("Not a valid command!");
  }
});

client.login(discordkey);