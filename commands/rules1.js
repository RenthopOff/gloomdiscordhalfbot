const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.member.hasPermission("ADMINISTRATOR")) {
      let rulesembed = new Discord.RichEmbed()
      .setColor("#8000ff")
      .addField("**Все правила нашего дискорд сервера**")
      .addField("[ ** Общение ** ]", `1.1 Запрещён спам, флуд, злоупотребление капсом в чате кроме <#503601140936474624> \n1.2 Запрещено ставить провокационные и оскорбительные никнеймы.\n1.3 Запрещено несоблюдение тематики чата.\n 1.4 Трансляция музыки/видео через микрофон.\n 1.5 Неадекватное поведение в текстовом или голосовом чате в любых проявлениях.`)
      .addField("[ ** Дополнительные правила ** ]", `2.1 Запрещается употребление уничижительных определений различных национальностей, народов и групп, таких как "пиндосы", "хохлы", "москали" и пр.\n 2.2 Вранье, чужие аватарки, выдача себя за другое лицо и твинк-аккаунты запрещены. Это плохо очень плохо делать.\n 2.3 Запрещено переводить музыкального бота в другие каналы.\n 2.4 Запрещена публикация сообщений, призывающих к суициду.`)
      .addField("[ ** Прочее ** ]", `3.1 Правила могут обновляться, изменяться и дополняться без уведомления пользователей.\n 3.2 Администрация может отклоняться от норм наказаний.\n 3.3 Администрация сервера имеет право наказывать нарушителя на свое усмотрение.\ 3.4 После попадания на сервер, вы автоматически соглашаетесь с существующими положениями и правилами.`);

      message.channel.send(rulesembed)
    }

}

module.exports.help = {
  name:"rules"
}