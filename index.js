let precio = 400000
let quantity = 0

let precioSpan = document.querySelector(".precio-inicial");
let btnMore = document.getElementById("btnMore")
let btnLess = document.getElementById("btnLess")
let quantitySpan = document.getElementById("quantity")
let totalPrice = document.getElementById("totalPrice")

precioSpan.innerHTML = precio
quantitySpan.innerHTML = quantity

function more() {
   quantity += 1
   quantitySpan.innerHTML = quantity
   totalPrice.innerHTML = precio * quantity
}

btnMore.addEventListener('click', more)


function less() {
    quantity -= 1
    if(quantity < 0) {
        quantity = 0
    }
    quantitySpan.innerHTML = quantity
    totalPrice.innerHTML = precio * quantity
 }

 btnLess.addEventListener('click', less)