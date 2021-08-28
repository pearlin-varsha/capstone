
var cartValue =document.getElementById("cart-value");
var cartButton=document.getElementById("cart");
let pizza1Add = document.getElementById("pizza1Add")
let pizza2Add = document.getElementById("pizza2Add")
let pizza3Add = document.getElementById("pizza3Add")


var items=[
{
    name:"Cheese Pizza",
    quantity: 0,
    dollars: 1,
    cents: 25,
},
{
    name:"BBQ Chicken Pizza",
    quantity: 0,
    dollars: 2,
    cents: 59,
},
{
    name:"Margherita Chicken Pizza",
    quantity: 0,
    dollars: 2,
    cents: 80,
},
]

function updateCart () {
    cart = items[0].quantity+items[1].quantity+items[[2]].quantity,
    cartValue.innerHTML=cart;
}

pizza1Add.onclick = () => {
    items[0].quantity++;
    updateCart();
};

pizza2Add.onclick = () => {
    items[1].quantity++;
    updateCart();
};

pizza3Add.onclick = () => {
    items[2].quantity++;
    updateCart();
};

var finalDollars = 0;
var finalCents = 0;
function updatePrice() {
    var pizza1CostInCents =
    items[0].quantity * items[0].dollars * 100 + items[0].quantity * items[0].cents;
    var pizza2CostInCents =
    items[1].quantity * items[1].dollars * 100 + items[1].quantity * items[1].cents;
    var pizza3CostInCents =
    items[2].quantity * items[2].dollars * 100 + items[2].quantity * items[2].cents;

    totalPriceInCents =
    pizza1CostInCents +
    pizza2CostInCents +
    pizza3CostInCents ;

    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

var whatsappLink = "https://api.whatsapp.com/send?phone=917339241700&text=Order%20details";

function updateWhatsappLink () {
    if(items[0].quantity != 0) {
        whatsappLink += "%0A" + items[0].name + "%20" + items[0].quantity; 
    }
    if(items[1].quantity != 0) {
        whatsappLink += "%0A" + items[1].name + "%20" + items[1].quantity; 
    }
    if(items[2].quantity != 0) {
        whatsappLink += "%0A" + items[2].name + "%20" + items[2].quantity; 
    }

    whatsappLink += "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
}