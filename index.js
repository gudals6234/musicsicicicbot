const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;
const welcomeChannelName = "환영한다-동무들";
const byeChannelName = "잘가시고";
const welcomeChannelComment = "동무 반갑소";
const byeChannelComment = "잘가시고";

client.on('ready', () => {
  console.log('켰다.');
});

client.on("guildMemberAdd", (member) => {
  const guild = member.guild;
  const newUser = member.user;
  const welcomeChannel = guild.channels.find(channel => channel.name == welcomeChannelName);

  welcomeChannel.send(`<@${newUser.id}> ${welcomeChannelComment}\n`);

  member.addRole(guild.roles.find(role => role.name == "로동자"));
});

client.on("guildMemberRemove", (member) => {
  const guild = member.guild;
  const deleteUser = member.user;
  const byeChannel = guild.channels.find(channel => channel.name == byeChannelName);

  byeChannel.send(`<@${deleteUser.id}> ${byeChannelComment}\n`);
});

client.on('message', (message) => {
  if(message.author.bot) return;

  if(message.content == '맹구') {
    return message.reply('씨발롬아');
  }

  if(message.author.bot) return;

  if(message.content == '맹구봇') {
    return message.reply('뭐요 ^^ㅣ발아');
  }

  if(message.author.bot) return;

  if(message.content == '맹구봇 노래틀어') {
    return message.reply('병신아 코드를 짜세요');
  }

  if(message.author.bot) return;

  if(message.content == '맹구봇 옷벗어') {
    return message.reply('느게미요 ^^ㅣ발아');
  }

  if(message.author.bot) return;

  if(message.content == '장현준') {
    return message.reply('나 장현준 아니라고 븅신아');
  }
      
  if(message.author.bot) return;

  if(message.content == '맹구봇 안녕') {
    return message.reply('뭐요 병시나');
  }  

  if(message.author.bot) return;

  if(message.content == '맹구봇 바지벗어') {
    return message.reply('좆이나까 잡수세요 ㅗ');
  }  

  if(message.author.bot) return;

  if(message.content == '맹맹구구봇 닥닥쳐') {
    return message.reply('어어쩌쩌라라구구요요');
  }  

  if(message.author.bot) return;

  if(message.content == '맹구봇 호날두') {
    return message.reply('개새끼');
  }  

  if(message.author.bot) return;

  if(message.content == '맹구봇 벗어') {
    return message.reply('ㄴㅇㅁ');
  }  

  if(message.author.bot) return;

  if(message.content == '맹구봇 임포스터 찾아야지') {
    return message.reply('EMERGENCY');
    return message.reply('저새끼 벤트');
  }  

  if(message.author.bot) return;

  if(message.content == 'ㅈㅈ') {
    return message.reply('ㅈㅈ? ㅈㅎㄴ ㅆㅂㅇ ㅁㄱ ㅈㅈ ㄹㄴㄱㅇ');
  }  
  
  if(message.author.bot) return;

  if(message.content == '정정석') {
    return message.reply('미친새끼');
  }  

  if(message.content == 'embed') {
    let img = 'https://cdn.discordapp.com/icons/419671192857739264/6dccc22df4cb0051b50548627f36c09b.webp?size=256';
    let embed = new Discord.RichEmbed()
      .setTitle('타이틀')
      .setURL('http://www.naver.com')
      .setAuthor('호날두', img, 'http://www.naver.com')
      .setThumbnail(img)
      .addBlankField()
      .addField('Inline field title', 'Some value here')
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here', true)
      .addField('Inline field title', 'Some value here1\nSome value here2\nSome value here3\n')
      .addBlankField()
      .setTimestamp()
      .setFooter('호날두 만듬', img)

    commandList.forEach(x => {
      commandStr += `• \`\`${changeCommandStringLength(`${x.name}`)}\`\` : **${x.desc}**\n`;
    });

    embed.addField('Commands: ', commandStr);

    message.channel.send(embed)
  }

  if(message.content.startsWith('!전체공지')) {
    if(checkPermission(message)) return
    if(message.member != null) { // 채널에서 공지 쓸 때
      let contents = message.content.slice('!전체공지'.length);
      message.member.guild.members.array().forEach(x => {
        if(x.user.bot) return;
        x.user.send(`<@${message.author.id}> ${contents}`);
      });
  
      return message.reply('공지를 전송했습니다.');
    } else {
      return message.reply('채널에서 실행해주세요.');
    }
  }
});

function checkPermission(message) {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) {
    message.channel.send(`<@${message.author.id}> ` + "명령어를 수행할 관리자 권한을 소지하고 있지않습니다.")
    return true;
  } else {
    return false;
  }
}

function changeCommandStringLength(str, limitLen = 8) {
  let tmp = str;
  limitLen -= tmp.length;

  for(let i=0;i<limitLen;i++) {
      tmp += ' ';
  }

  return tmp;
}


client.login(token);