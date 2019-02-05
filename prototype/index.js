const scout_prototype = require('./scout_prototype');

let ryan = scout_prototype.clone();
ryan.name = 'Ryan Ford';
ryan.addItemToList('slingshot');

let sally = scout_prototype.clone();
sally.name = 'Sally Ford';
sally.addItemToList('reading light');

console.log(`${ryan.name}: ${ryan.shoppingList}`);
console.log(`${sally.name}: ${sally.shoppingList}`);
