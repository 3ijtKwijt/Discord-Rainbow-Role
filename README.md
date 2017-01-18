# Discord-Rainbow-Role
Getting a Rainbow Role with a Discord Bot **using Discord.JS**

## Usage:
1. Install [**Discord.JS**](https://github.com/hydrabolt/discord.js/)
2. Get this code
3. Change config.js

## Config:
| Option        | Usage         |
| ------------- |---------------|
| token         | Your Discord API token |
| servers       | List your server ids here ([how to get my server id?](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-server-ID-))      |
| roleName      | The name of the role you'd like to automatically change it's color      |
| colors        | The number of colors that'll be used      |
| speed         | The speed on which it needs to change (in ms)      |
| logging       | If you want to log when the color has changed in the console (can be really messy)      |

### Attention!
**If you are using a speed that's lower than 60000ms (1 minute) Your bot might get IP-banned!**

For permissions, the role from the bot needs to be higher placed than the role you want to change it's color from in the server settings, like this

[Admin]

[BotRole]

[RoleYouWantToChangeItsColorFrom]

[@everyone]
