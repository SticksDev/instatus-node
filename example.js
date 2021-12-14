const { PagesClient, Client } = require('./index');

// new Client.Auth('ad7305074300db3a6306529ab99b5af2', 'logrsp')

console.log(Client, PagesClient, PagesClient.page)

let page = PagesClient.page.getAllAccountPages()
console.log(page)