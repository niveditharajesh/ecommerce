const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "ASQjcxB1cor6e1gPSYDqUiEJn8JjGudASgXoiPmjQGwjLsW6gnod-hiiMuXhMMqtfjlGyLpJiswDAk60",
  client_secret: "EN8pw8EB7LC8RZEEmHGF64ILoFpRe5jwJuN6J4OjZHTbep4ZehQvFZueHU2clxGgAmgh62vkXVKsxSc-",
});

module.exports = paypal;