const { PagesClient, Client } = require('./index');

new Client.Auth('tokenhere', 'logrsp')

console.log(Client, PagesClient, PagesClient.page)

let page = PagesClient.page.getAllAccountPages()
console.log(page)
