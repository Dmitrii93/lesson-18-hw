//1
let elTitle = document.querySelector('title');
elTitle.innerHTML = "Today we manipulate with DOM";
//2
let question = document.getElementById('question-frontend');
let showQuestion = question.innerText;
let answer = document.getElementById("answer-frontend");
let x = confirm(showQuestion);
let msg;
if (x) {
    msg = 'YES';
} else {
    msg = 'NO';
};
answer.innerHTML = msg;
//3
let newEl = document.createElement('li')
let newProduct = prompt('Else product?');
let newText = document.createTextNode(newProduct);
newEl.appendChild(newText);
let list = document.getElementsByTagName("ul")[0];
list.appendChild(newEl);
//4
let removeEl = document.getElementsByTagName('li')[2];
list.removeChild(removeEl);
//5
let tPrice = document.getElementById('your-total-price');
let item = prompt('name the item');
let price = prompt('name the price');

tPrice.innerHTML += item + ' ' + price;
//6
let productList = [{name : 'Carrot', price : 2.50}, {name : 'Apple', price : 1.75},
                    {name : 'Watermelon', price : 5}, {name : 'Tomato', price : 3.25}];
let productName = prompt('What product do you want to buy? Carrot / Apple / Watermelon / Tomato');
let quantity = prompt('How many pounds? Please enter a number');
let yourTotalPrice = tPrice.innerHTML;
if (productName === 'Carrot') {
    yourTotalPrice = productList[0].price*quantity;
} else if (productName === 'Apple') {
    yourTotalPrice = productList[1].price*quantity;
} else if (productName === 'Watermelon') {
    yourTotalPrice = productList[2].price*quantity;
} else if (productName === 'Tomato') {
    yourTotalPrice = productList[3].price*quantity;
} else {
    alert('Sorry the item you are searching is not found.');
};

if (productName === 'Carrot'||'Apple'||'Watermelon'||'Tomato') {
    tPrice.innerHTML = yourTotalPrice ;
};