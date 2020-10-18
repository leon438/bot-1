const db = require('quick.db')
const Discord = require('discord.js')
const client = new Discord.Client()

const sleep = ms => new Promise(r => setTimeout(r, ms))
const prefix = '소금아'

client.on('message', async message => {
    if (message.content ===  prefix + '핑' || message.content === prefix + '속도') {
      message.channel.send('퐁!')
      const embed = new Discord.MessageEmbed().setColor('0x00ff00').setTitle("핑").setDescription("현재 핑을 구하는 중이예요....")
      message.channel.send(embed).then(async content => {
        if (Math.round(client.ws.ping) > 300) {
          const pong = new Discord.MessageEmbed().setColor('0xff0000').setTitle("🏓퐁!").setDescription(`현재 핑: ${Math.round(client.ws.ping)}ms \n 상태: 불안정💀`).setFooter("아야!")
          await content.edit(pong)
        }
        else (Math.round(client.ws.ping) > 250) ;{
          const pong = new Discord.MessageEmbed().setColor('0x00ff00').setTitle("🏓퐁!").setDescription(`현재 핑: ${Math.round(client.ws.ping)}ms \n 상태: 양호✅`).setFooter("상태가 매우 좋아요")
          await content.edit(pong)
        }
      })
    }

    if (message.content === '소금아') {
        message.channel.send('헤헷')
    }

    if ((/py/).test(message.content) === true) {
        if (message.author.bot) return
        message.channel.send(`나닛 py라는 말을하다니 너 싱고`)
      }


    if (message.content === '소금아 가입') {
        message.channel.send('정말 가입 하시겠습니까?')


        const filter1 = (reaction, user) => {
            return reaction.emoji.name == '⭕' && user.id == message.author.id
        }
        
        message.react('⭕')
        
        message.awaitReactions(filter1, {max:1}).then(() => {
            db.add(`Usersolt.${message.author.id}`, 1000)
            db.add(`Usergaip.${message.author.id}`, 1)
            message.channel.send('가입 완료!\n지원금(?)으로 소금 1000알을 드렸어요!')
      })
    
    }

})



client.login('process.env.TOKEN')