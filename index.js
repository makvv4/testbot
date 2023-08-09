// Подключаем библиотеку для работы с Telegram API в переменную
var TelegramBot = require('node-telegram-bot-api');

// Устанавливаем токен, который выдавал нам бот
var token = '';
// Включить опрос сервера. Бот должен обращаться к серверу Telegram, чтобы получать актуальную информацию
// Подробнее: https://core.telegram.org/bots/api#getupdates
var bot = new TelegramBot(token, { polling: true });

// меню
bot.onText(/\/start/, (msg) => {

  bot.sendMessage(msg.chat.id, "Welcome", {
    "reply_markup": {
      "keyboard": [["Купить", "Получить ключ"], ["Моя подписка", "Мои ключи"], ["Реферальная программа", "Информация"]]
    }
  });

});

bot.on('message', (msg) => {

  switch (msg.text.toString().toLowerCase()) {
    case 'ams':
      bot.sendMessage(msg.chat.id, 'hello')
    case 'получить ключ':
      bot.sendMessage(msg.chat.id, 'Выберите страну для генерации VPN ключа \n\n<b>Обратите внимание:</b> \n\n—Сервер "Россия" актуален, если вы находитесь за пределами Российской Федерации и вам нужен доступ к российским ресурсам \n\n— Если вы находитесь в Российской Федерации - выбирайте "Нидерланды", "Польша" или "Финляндия" \n\nВы всегда можете вернуться в этот раздел и сформировать ключи для других серверов \n\n<a href="http://www.example.com/">Написать в Поддержку</a>', {
        parse_mode: "HTML",
        "reply_markup": {
          inline_keyboard: [
            [{ text: 'Website', callback_data: 'ams' }]
          ]
        }
      });
    case 'купить':
      bot.sendMessage(msg.chat.id, 'Выберите страну для генерации VPN ключа \n\n<b>Обратите внимание:</b> \n\n—Сервер "Россия" актуален, если вы находитесь за пределами Российской Федерации и вам нужен доступ к российским ресурсам \n\n— Если вы находитесь в Российской Федерации - выбирайте "Нидерланды", "Польша" или "Финляндия" \n\nВы всегда можете вернуться в этот раздел и сформировать ключи для других серверов \n\n<a href="http://www.example.com/">Написать в Поддержку</a>', {
        parse_mode: "HTML",
        "reply_markup": {
          inline_keyboard: [
            [{ text: 'тариф 1', callback_data: 'pay_1', pay: true }]
          ]
        }
      });

  }

  // if (msg.text.toString().toLowerCase().includes(bye)) {
  //   bot.sendMessage(msg.chat.id, "Hope to see you around again , Bye");
  // }

});

// Ответ от кнопок
bot.on('callback_query', function (msg) {

  console.log(msg.data);

  bot.sendMessage(msg.from.id, 'ok ams')

});

// Написать мне ... (/echo Hello World! - пришлет сообщение с этим приветствием, то есть "Hello World!")
bot.onText(/\/echo (.+)/, function (msg, match) {
  var fromId = msg.from.id; // Получаем ID отправителя
  var resp = match[1]; // Получаем текст после /echo
  bot.sendMessage(fromId, resp);
});






// bot.on('message', function (msg) {
//   var chatId = msg.chat.id; // Берем ID чата (не отправителя)
//   // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
//   var photo = 'cats.png'; // в папке с ботом должен быть файл "cats.png"
//   bot.sendPhoto(chatId, photo, { caption: 'Милые котята' });
// });


// // Простая команда без параметров
// bot.on('message', function (msg) {
//   var chatId = msg.chat.id; // Берем ID чата (не отправителя)
//   // Фотография может быть: путь к файлу, поток (stream) или параметр file_id
//   var photo = 'cats.png'; // в папке с ботом должен быть файл "cats.png"
//   bot.sendPhoto(chatId, photo, { caption: 'Милые котята' });
// });
