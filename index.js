const Discord = require('discord.js');
const bot = new Discord.Client();
const token= 'NjQzODU4NTY3MTIzOTU5ODIx.XcrmEQ.AHyYyCm9HGEwSjQDCNF7nN6q-I4';
const PREFIX ="!";

var version = '1.0.1'

bot.on('ready',()=>{
    console.log('Bot online');
    bot.user.setStatus('Online')
    bot.user.setActivity('Fuck with You | Made by BlaCkCAT™',{type: 'WATCHING' })  
})

bot.on('message',message=>{
    
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
        break;

        case 'website':
            message.channel.sendMessage('youtube.com')
        break;

        case 'info':
            if(args[1] === 'version'){
                message.channel.sendMessage('Version ' + version);               
            }else{
                message.channel.sendMessage('Invalid Args')
            }
        break;   
        
        case 'clear':
            if(!args[1]) return message.reply('Error please define value (Ex: "clear 10")')
            message.channel.bulkDelete(args[1]+1)
            message.channel.sendMessage('**'+args[1] + ' Messages Deleted**')
            message.channel.bulkDelete(2);

        break;

        case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name: ', message.author.username, true)
            .addField('Version ', version,true)
            .addField('Current Sever', message.guild.name, true)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Join @HERE ')
            message.channel.sendEmbed(embed);
        break;

        case 'send':
            const attachment = new Attachment('https://cdn.mos.cms.futurecdn.net/onDygbL5DhQMWQxD2KwGTc-1024-80.jpg')
            message.channel.send(message.author, attachment);
        break; 
        
        case 'poll':
                
                embed.setColor(0xFFC)
                .setTitle("Inititate Poll")
                .setDescription("!poll to initiate a simple yes or no poll");
                
                if(!args[1]){
                    message.channel.send(embed);
                }
    
            break;






    }

});



//WELCOME Sesion

bot.on('guildMemberAdd',member =>{

    const channel = member.guild.channels.find(channel=> channel.name === "《🔥》welcome");
    if(!channel) return

    channel.send('Welcome to our sever, ${member} , Please read rules in the #《🛑》rules Channel')

});


bot.login(token);