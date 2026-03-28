let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let container = document.getElementById("cart-container");
let total = 0;

cartItems.forEach((item, index)=>{

let div = document.createElement("div");
div.classList.add("cart-item");

total += item.price;

div.innerHTML = `
<img src="${item.img}">
<h3>${item.name}</h3>
<p>$${item.price}</p>
<button onclick="removeItem(${index})">Remove</button>
`;

container.appendChild(div);
});

document.getElementById("total-price").innerText = total;

function removeItem(index){
cartItems.splice(index,1);
localStorage.setItem("cart", JSON.stringify(cartItems));
location.reload();
}