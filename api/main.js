import TelegramBot from 'node-telegram-bot-api';

export default async function handler(
  request,
  response,
) {

  if (request.method === 'GET') {
    response.status(200).send("I'm alive!")
    return
  }

  const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN)
  const bot_id = process.env.TELEGRAM_CHAT_ID

  const { message } = request.body;

  if (message) {
    const { chat: { id, first_name }, text, message_id } = message;

    if (id == bot_id) {
      if (text == '/accounts') {
        await bot.sendMessage(id, "账户列表", {
          reply_to_message_id: message_id,
          parse_mode: 'Markdown'
        });
      }
      else if (!text.match(/^@.*?\s>\s.+/)) {
        await bot.sendMessage(id, "*Error Format:*\neg: `@魏家便利店 卤肉饭 20 信用卡 > 午餐`", {
          reply_to_message_id: message_id,
          parse_mode: 'Markdown'
        });
      } else {
        await bot.sendMessage(id, `Echo ${message}`, {
          reply_to_message_id: message_id,
          parse_mode: 'Markdown'
        });
        /* try { */
        /*   // Create a costflow parsed message to send back */
        /*   const { output } = await parse(text); */
        /*   // Record to Github */
        /*   await recordBillToGithub(output, text) */
        /*   // Send our new message back and wait for the request to finish */
        /*   await bot.sendMessage(id, output, { reply_to_message_id: message_id }); */
        /* } catch (error) { */
        /*   await bot.sendMessage(id, error.message, { reply_to_message_id: message_id }); */
        /* } */
      }
    } else {
      await bot.sendMessage(id, '对不起, 该机器人为私人机器人, 您无权使用', { reply_to_message_id: message_id });
      await bot.sendMessage(bot_id, `主人主人!!, 发现匿名用户使用, username: ${first_name}, message: ${text}`);
    }
  }

  return response.status(200).send("OK!");
}
