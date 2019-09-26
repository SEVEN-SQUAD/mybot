const Discord = require('discord.js')
const client = new Discord.Client()
let prefix = "?"
 
client.login('NTk2Nzc2MDM0NDczNDc2MDk3.XYzgyQ.QI8siZF3lN-c8usrBVYY3qaG_UU')

client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "clear") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**mymknch lk al9lawi**")
        let count = parseInt(args[1])
        if (!count) return message.channel.send("**ch7al biti mn msg nsupprimer**")
        if (isNaN(count)) return message.channel.send("**wa ch7al mn 1 tal 100 al9lawi **")
        if (count < 1 || count > 100) return message.channel.send("Veuillez indiquer un nombre entre 1 et 100")
        message.channel.bulkDelete(count + 1, true)
    }
 
    if (args[0].toLowerCase() === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("**mymknch lk al9lawi**")
        let member = message.mentions.members.first()
        if (!member) return message.channel.send("Membre introuvable")
        if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.ownerID) return message.channel.send("Vous ne pouvez pas mute ce membre")
        if (!member.manageable) return message.channel.send("**Mymknch tmuter had l9lawi**")
        let muterole = message.guild.roles.find(role => role.name === 'Muted')
        if (muterole) {
            member.addRole(muterole)
            message.channel.send(member + ' a été mute :white_check_mark:')
        }
        else {
            message.guild.createRole({name: 'Muted', permissions: 0}).then(function (role) {
                message.guild.channels.filter(channel => channel.type === 'text').forEach(function (channel) {
                    channel.overwritePermissions(role, {
                        SEND_MESSAGES: false
                    })
                })
                member.addRole(role)
                message.channel.send(member + ' :white_check_mark: **muted from the text!** :zipper_mouth: :white_check_mark:')
            })
        }
    }
})
/*Kick*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLowerCase() === prefix + 'kick') {
       if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send("Vous n'avez pas la permission d'utiliser cette commande ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**montionner azebi** :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas kick cet utilisateur :x:")
       if (!member.kickable) return message.channel.send("Je ne peux pas exclure cet utilisateur :sunglass:")
       member.kick()
       message.channel.send('**' + member.user.username + '** 5roj t9awd :white_check_mark:')
    }
})

/*Ban*/
client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)

    if (args[0].toLocaleLowerCase() === prefix + 'ban') {
       if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send("Ma3ndkch l7a9 azebi ;(")
       let member = message.mentions.members.first()
       if (!member) return message.channel.send("**mentionner azebi** :x:")
       if (member.highestRole.calculatedPosition >= message.member.highestRole.calculatedPosition && message.author.id !== message.guild.owner.id) return message.channel.send("Vous ne pouvez pas bannir cet utilisateur :x:")
       if (!member.bannable) return message.channel.send("**Mymknch lia** :sunglass:")
       message.guild.ban(member, {days: 7})
       message.channel.send('**' + member.user.username + '** 5roj t9awd :white_check_mark:')
    }
})
client.on('message', function (message) {
    if (message.content === "rashidox") {
        message.channel.sendMessage('**gay XD** :joy: :thumbsup:')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "sevenari") {
        message.channel.sendMessage('**molaya** :heart: :joy: :thumbsup:')
        console.log('répond à tfq')
    }
})
client.on('message', function (message) {
    if (message.content === "redmonkey") {
        message.channel.sendMessage('**bnt nas** :rose: :heart:')
        console.log('répond à tfq')
    }
})