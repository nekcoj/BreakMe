function timeout(message, args) {
  setTimeout(() => {
    message.channel.send("Time for a break! @here");
  }, args*1000*60)
} 


module.exports = {
  name: "timer",
  description: "Starts a timer for x amount of minutes. Ex: !timer 1, starts a 1 minute timer.",
  execute(message, args){
    if(isNaN(args)){
      message.channel.send(`Argument is not a number!`);
      return;
    } else {
      message.channel.send(`Setting timer for ${args} minute(s)!`);
      timeout(message, args);
    }
  }
}
