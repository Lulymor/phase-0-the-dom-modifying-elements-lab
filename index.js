// Write your code here!
const main = document.querySelector('main');
main.remove();

const newHeader = document.createElement('h1');
let name = "Luana"
newHeader.id = 'victory'
newHeader.textContent = `${name} is the champion`;