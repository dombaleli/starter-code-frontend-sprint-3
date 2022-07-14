// Array with products (objects) added directly with push(). Products in this array are repeated.
let cartList = [];
//console.log(cartList);
// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
let cart = [];
console.log(cart);
let total = 0;

// Exercise 1
/*function buy(id) {
    
    let numProduct = id;   

    for(let i = 0; i < products.length; i++){
        if(numProduct == products[i].id){
            cartList.push(products[i]);
        }
    }
    calculateTotal();
}*/

// Exercise 2
function cleanCart() {
    cartList.length = 0;
    cart.length = 0;
}

// Exercise 3
/*function calculateTotal() {

    let total = 0;

    if(cartList.length > 0) {

        for(let i = 0; i < cartList.length; i++){
            total += cartList[i].price;
        }
    }else{
        total = 0;
    }
    console.log(total);
}*/
// Hasta aqui, siguiendo el orden, todo funciona. Primero se compra, y se va viendo por consola el precio. Para dejar a cero, tocar botón CLEAN.

// Exercise 4
/*function generateCart() {       

    let productoRepetido;

    for (let i = 0; i < cartList.length; i++){
        if (cart.length == 0){  
            cartList[i].quantity = 1;
            cart.push(cartList[i]);
        }else{
            productoRepetido = cart.find(producto => producto.id === cartList[i].id);
            if(productoRepetido == undefined){
                cartList[i].quantity = 1;
                cart.push(cartList[i]);
            }else{
                productoRepetido.quantity +=1;
            }
        }
    }
    cartList.length = 0;
    // No puedo llamar a esta funcion desde function buy(), porque como la reinicio y el cartList queda a cero, no funcionaria la funcion calculateTotal(). He creado el boton "krt" para llamarla.
}*/


// ** Nivell II **

// Exercise 7
function addToCart(id) {

    let idProduct = id;   
    let repetido;

    if(cart.length === 0){
        for(let i = 0; i < products.length; i++){ 
            if(idProduct === products[i].id){
              products[i].quantity = 1;
              cart.push(products[i]);
            }
        }
    }else{
        for(let i=0; i < products.length; i++){
            if(idProduct === products[i].id){
                repetido = cart.find(producto => producto.id === products[i].id);
                if(repetido == undefined){
                    products[i].quantity = 1;
                    cart.push(products[i]); 
                }else{
                    repetido.quantity += 1;
                }
            }
        }
    }    
}
// Exercise 5
function applyPromotionsCart() {

    const originalPriceOil = products[0].price;

    for (let i = 0; i < cart.length; i++){
        if(cart[i].id === 1){
            if (cart[i].quantity >= cart[i].offer.number){
                cart[i].price = 10;
                cart[i].subtotal = originalPriceOil * cart[i].quantity;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            }else{
                cart[i].subtotal = cart[i].quantity * cart[i].price;
            }
        }     
    }
    const originalPriceCake = products[2].price;

    for (let i = 0; i < cart.length; i++){
        if(cart[i].id === 3){
            if(cart[i].quantity >= cart[i].offer.number){
                cart[i].price = cart[i].price / 3 * 2;
                cart[i].subtotal = originalPriceCake * cart[i].quantity;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;                
            }else{
                cart[i].subtotal = cart[i].quantity * cart[i].price;
            }
        }else{
            cart[i].subtotal = cart[i].price * cart[i].quantity;
        }
    }    
}

// Exercise 6
function printCart() {
    
    applyPromotionsCart();

    //Para el indicador de la cantidad de productos en el carrito.
    let contador = 0;

    for(let i = 0; i < cart.length; i++){
        contador += cart[i].quantity;
    }
    let modal = document.getElementById("count_product");
    modal.innerHTML = contador;

    // Para cambiar el precio total en el modal. 
    
    let total = 0;

    for(let i = 0; i < cart.length; i++){
        if(cart[i].id === 1 ){
            if(cart[i].quantity >= 3){
                total += cart[i].subtotalWithDiscount;
            }else{
                total += cart[i].subtotal;
            }   
        }else if(cart[i].id === 3){
            if(cart[i].quantity >= 10){
                total += cart[i].subtotalWithDiscount;
            }else{
                total += cart[i].subtotal;
            }
        }else{
            total += cart[i].subtotal;
        }
    }
    let totalCompra = document.getElementById("total_price");
    totalCompra.innerHTML = total.toFixed(2);
    console.log(total.toFixed(2));

    // Para cambiar las cantidades de cada producto en el modal.

    let cantidadAceite = 0;
    let cantidadPasta = 0;
    let cantidadCupcake = 0;
    let cantidadAllIn1 = 0; 
    let cantidadMakeup = 0;
    let cantidadLip = 0;
    let cantidadLawnDress = 0;
    let cantidadCombo = 0; 
    let cantidadToodler = 0;

    let precioAceite = 0;
    let precioPasta = 0;
    let precioCupcake = 0;
    let precioAllIn1 = 0; 
    let precioMakeup = 0;
    let precioLip = 0;
    let precioLawnDress = 0;
    let precioCombo = 0; 
    let precioToodler = 0;


    for(let i= 0; i < cart.length; i++){
        if(cart[i].id == 1){
            cantidadAceite = cart[i].quantity;
            if(cart[i].quantity < 3){
                precioAceite = cart[i].subtotal;
            }else{
                precioAceite = cart[i].subtotalWithDiscount;
            }   
        }else if(cart[i].id == 2){
            cantidadPasta = cart[i].quantity;
            precioPasta = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 3){
            cantidadCupcake = cart[i].quantity;
            if(cart[i].quantity < 10){ 
            precioCupcake = cart[i].subtotal;
            }else{
                precioCupcake = cart[i].subtotalWithDiscount;
            }
        }else if(cart[i].id == 4){
            cantidadAllIn1 = cart[i].quantity;
            precioAllIn1 = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 5){
            cantidadMakeup = cart[i].quantity;
            precioMakeup = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 6){
            cantidadLip = cart[i].quantity;
            precioLip = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 7){
            cantidadLawnDress = cart[i].quantity;
            precioLawnDress = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 8){
            cantidadCombo = cart[i].quantity;
            precioCombo = cart[i].quantity * cart[i].price;
        }else if(cart[i].id == 9){
            cantidadToodler = cart[i].quantity;
            precioToodler = cart[i].quantity * cart[i].price;
        }
    }

    // Para cambiar los precios por producto en el modal.
    let oilQty = document.getElementById("qty_oil");
    let oilPrice =  document.getElementById("price_oil");
    oilQty.innerHTML = cantidadAceite;
    oilPrice.innerHTML = precioAceite.toFixed(2);

    let pastaQty = document.getElementById("qty_pasta");
    let pastaPrice =  document.getElementById("price_pasta");
    pastaQty.innerHTML = cantidadPasta;
    pastaPrice.innerHTML = precioPasta.toFixed(2);

    let cupcakeQty = document.getElementById("qty_cupcake");
    let cupcakePrice =  document.getElementById("price_cupcake");
    cupcakeQty.innerHTML = cantidadCupcake;
    cupcakePrice.innerHTML = precioCupcake.toFixed(2);

    let allIn1Qty = document.getElementById("qty_allIn1");
    let allIn1Price =  document.getElementById("price_allIn1");
    allIn1Qty.innerHTML = cantidadAllIn1;
    allIn1Price.innerHTML = precioAllIn1.toFixed(2);

    let makeupQty = document.getElementById("qty_makeup");
    let makeupPrice =  document.getElementById("price_makeup");
    makeupQty.innerHTML = cantidadMakeup;
    makeupPrice.innerHTML = precioMakeup.toFixed(2);

    let lipQty = document.getElementById("qty_lip");
    let lipPrice =  document.getElementById("price_lip");
    lipQty.innerHTML = cantidadLip;
    lipPrice.innerHTML = precioLip.toFixed(2);

    let lawnDressQty = document.getElementById("qty_lawnDress");
    let lawnDressPrice =  document.getElementById("price_lawnDress");
    lawnDressQty.innerHTML = cantidadLawnDress;
    lawnDressPrice.innerHTML = precioLawnDress.toFixed(2);

    let comboQty = document.getElementById("qty_combo");
    let comboPrice =  document.getElementById("price_combo");
    comboQty.innerHTML = cantidadCombo;
    comboPrice.innerHTML = precioCombo.toFixed(2);

    let toodlerQty = document.getElementById("qty_toodler");
    let toodlerPrice =  document.getElementById("price_toodler");
    toodlerQty.innerHTML = cantidadToodler;
    toodlerPrice.innerHTML = precioToodler.toFixed(2);
}

// Exercise 8
function removeFromCart(id){  
    
    let idEliminar = id;

    for(let i = 0; i < cart.length; i++){
        if(idEliminar === cart[i].id){
            if(cart[i].id === 1){
                if(cart[i].quantity == 3){
                    cart[i].quantity -= 1;
                    cart[i].price = 10.5;
                }else if(cart[i].quantity == 1){
                    cart.splice([i],1);
                }else{
                    cart[i].quantity --;
                }
            }else if(cart[i].id === 3){
                if(cart[i].quantity == 10){
                    cart[i].quantity -= 1;
                    cart[i].price = 5;
                }else if(cart[i].quantity == 1){
                    cart.splice([i],1);
                }else{
                    cart[i].quantity --;
                }
            }else{
                if(cart[i].quantity == 1){
                    cart.splice([i],1);
                }else{
                    cart[i].quantity --;
                }
            }        
        }      
    }
}

function open_modal(){  
	printCart();

}