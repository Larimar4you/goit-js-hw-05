/* #завдання */
/*
Напиши стрілочну функцію sortByDescendingFriendCount(users) , 
яка прийматиме один параметр users — масив об’єктів користувачів.

Функція має повертати масив усіх користувачів, відсортованих 
за спаданням кількостій їх друзів (властивість friends).
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
    console.log(
      sortByDescendingFriendCount([
        {
          name: "Moore Hensley",
          friends: ["Sharron Pace"],
          gender: "male"
        },
        {
          name: "Sharlene Bush",
          friends: ["Briana Decker", "Sharron Pace"],
          gender: "female"
        },
        {
          name: "Ross Vazquez",
          friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
          gender: "male"
        },
        {
          name: "Elma Head",
          friends: ["Goldie Gentry", "Aisha Tran"],
          gender: "female"
        },
        {
          name: "Carey Barr",
          friends: ["Jordan Sampson", "Eddie Strong"],
          gender: "male"
        },
        {
          name: "Blackburn Dotson",
          friends: ["Jacklyn Lucas", "Linda Chapman"],
          gender: "male"
        },
        {
          name: "Sheree Anthony",
          friends: ["Goldie Gentry", "Briana Decker"],
          gender: "female"
        }
      ])
    );
    // [
    //   {
    //     name: "Ross Vazquez",
    //     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    //     gender: "male"
    //   },
    //   {
    //     name: "Sharlene Bush",
    //     friends: ["Briana Decker", "Sharron Pace"],
    //     gender: "female"
    //   },
    //   {
    //     name: "Elma Head",
    //     friends: ["Goldie Gentry", "Aisha Tran"],
    //     gender: "female"
    //   },
    //   {
    //     name: "Carey Barr",
    //     friends: ["Jordan Sampson", "Eddie Strong"],
    //     gender: "male"
    //   },
    //   {
    //     name: "Blackburn Dotson",
    //     friends: ["Jacklyn Lucas", "Linda Chapman"],
    //     gender: "male"
    //   },
    //   {
    //     name: "Sheree Anthony",
    //     friends: ["Goldie Gentry", "Briana Decker"],
    //     gender: "female"
    //   },
    //   {
    //     name: "Moore Hensley",
    //     friends: ["Sharron Pace"],
    //     gender: "male"
    //   }
    // ]
    