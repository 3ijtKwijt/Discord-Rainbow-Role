const Discord = require("discord.js");
const client = new Discord.Client({autoReconnect:true});
const config = require('./config.json');

var size    = config.colors;
var rainbow = new Array(size);

for (var i=0; i<size; i++) {
  var red   = sin_to_hex(i, 0 * Math.PI * 2/3); // 0   deg
  var blue  = sin_to_hex(i, 1 * Math.PI * 2/3); // 120 deg
  var green = sin_to_hex(i, 2 * Math.PI * 2/3); // 240 deg

  rainbow[i] = "#"+ red + green + blue;
}

function sin_to_hex(i, phase) {
  var sin = Math.sin(Math.PI / size * 2 * i + phase);
  var int = Math.floor(sin * 127) + 128;
  var hex = int.toString(16);

  return hex.length === 1 ? "0"+hex : hex;
}

function getTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    return hour + ":" + min + ":" + sec;
}

var place = 0;
var servers = config.servers;

var changeColor = function() {
	for (let index = 0; index < servers.length; ++index) {		
		client.guilds.get(servers[index]).roles.find('name', config.roleName).setColor(rainbow[place])
		.catch(console.error);
		
		if(config.logging){
			console.log("[" + getTime() + " ][ColorChanger] Changed color to " + rainbow[place] + "in server: " + servers[index]);
		}
		if(place == (size - 1)){
			place = 0;
		}else{
			place++;
		}
	}
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.username}!`);
	if(config.speed < 60000) console.log("The minimum speed is 60.000, if this gets abused your bot might get IP-banned"); process.exit(1);
	setInterval(changeColor, config.speed);
});


client.login(config.token);
