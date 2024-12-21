/* #завдання */
/*
Об’єкт profile описує профіль користувача на ігровій платформі. 
У його властивостях зберігається ім’я профілю username та кількість активних годин playTime, 
проведених у грі.

const profile = {
    username: "Jacob",
  playTime: 300,
};

Доповни об’єкт profile методами для роботи з його властивостями.

Метод changeUsername(newName) повинен приймати рядок (нове ім’я) 
в параметр newName та змінювати значення властивості username на нове. 
Нічого не повертає.
Метод updatePlayTime(hours) повинен приймати число (кількість годин) 
у параметр hours та збільшити на нього значення властивості playTime. 
Нічого не повертає.
Метод getInfo() має повертати рядок формату <Username> has <amount> 
active hours!, де <Username> — це ім’я профілю, 
а <amount> — кількість ігрових годин.
*/

`use strict`;
const profile = {
  username: "Jacob",
  playTime: 300,

  // Метод для зміни імені профілю
  changeUsername: function(newName) {
    this.username = newName;
  },

  // Метод для оновлення кількості годин
  updatePlayTime: function(hours) {
    this.playTime += hours;
  },

  // Метод для отримання інформації про профіль
  getInfo: function() {
    const amount = this.playTime;
    return `${this.username} has ${amount} active hours!`;
  }
};

    /* Перевiрка функцii */
    console.log(profile.getInfo()); // "Jacob has 300 active hours!"

    profile.changeUsername("Marco");
    console.log(profile.getInfo()); // "Marco has 300 active hours!"
    
    profile.updatePlayTime(20);
    console.log(profile.getInfo()); // "Marco has 320 active hours!"
    