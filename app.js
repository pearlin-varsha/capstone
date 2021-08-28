var cartValue =document.getElementById("cart-value");
var cartButton=document.getElementById("cart");


var addButtons=document.getElementsByClassName("button")

console.log(addButtons[0]);

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
    cart = 
    pizza1.quantity+
    pizza2.quantity+
    pizza3.quantity,
    cartValue.innerHTML=cart;
}

pizza1Add.onclick = (e) => {
    pizza1.quantity++;
    updateCart();
};

pizza2Add.onclick = (e) => {
    pizza2.quantity++;
    updateCart();
};

pizza3Add.onclick = (e) => {
    pizza3.quantity++;
    updateCart();
};

var finalDollars = 0;
var finalCents = 0;
function updatePrice() {
    var pizza1CostInCents =
    pizza1.quantity * pizza1.dollars * 100 + pizza1.quantity * pizza1.cents;
    var book2CostInCents =
    pizza2.quantity * pizza2.dollars * 100 + pizza2.quantity * pizza2.cents;
    var book3CostInCents =
    pizza3.quantity * pizza3.dollars * 100 + pizza3.quantity * pizza3.cents;

    totalPriceInCents =
    pizza1CostInCents +
    pizza2CostInCents +
    pizza3CostInCents ;

    finalDollars = Math.floor(totalPriceInCents / 100);
    finalCents = totalPriceInCents % 100;
}

var whatsappLink = "https://api.whatsapp.com/send?phone=919000000000&text=Order%20details";

function updateWhatsappLink () {
    if(pizza1.quantity != 0) {
        whatsappLink += "%0A" + pizza1.name + "%20" + pizza1.quantity; 
    }
    if(pizza2.quantity != 0) {
        whatsappLink += "%0A" + pizza2.name + "%20" + pizza2.quantity; 
    }
    if(pizza3.quantity != 0) {
        whatsappLink += "%0A" + pizza3.name + "%20" + pizza3.quantity; 
    }

    whatsappLink += "%0A" + "Total%20Price:%20$" + finalDollars + "%20" + finalCents + "c";
}

cartButton.onclick = () => {
    updatePrice();
    updateWhatsappLink();
    window.open(whatsappLink, "_blank");
}