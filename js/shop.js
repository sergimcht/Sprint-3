// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
   {
        id: 1,
        name: 'Comunist Stop',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Semi-empty Room',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'White Museum',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'Antique Sculpture',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Medieval Castle',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Divine Ascension',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Cute Dog',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'White Horse',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Royal Fish',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1 ok
function buy(id_selected) {
    // 1. Loop for to the array products to get the item to add to cart
    let product = products.find(product => product.id == id_selected);
    // 2. Add found product to the cartList array
    cartList.push(product);
}

// Exercise 2 ok
function cleanCart() {
    cart = [];
    printCart()
}

// Exercise 3 ok
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let totalCost = 0;
    for (i=0; i<cartList.length; i++) {
        totalCost += cartList[i].price;
    }
}

// Exercise 4 ok
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.
    let i;
    for (i=0; i<cartList.length; i++) {
        let currentItem = cart.findIndex(newitem => newitem.id == cartList[i].id);

        if (currentItem === -1) {
            let newItem = {
                id: cartList[i].id,
                name: cartList[i].name,
                price: cartList[i].price,
                type: cartList[i].type,
                quantity: 1
            };
            newItem.subtotal = (newItem.quantity * newItem.price);
            cart.push(newItem);
        } else {
            cart[currentItem].quantity++;
            cart[currentItem].subtotal = (cart[currentItem].quantity * cart[currentItem].price);
        }
    }
}
// Exercise 5 ok
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    for (i=0; i<cart.length; i++) {
        if ((cart[i].id == 1) && (cart[i].quantity >= 3)) {
            cart[i].subtotalWithDiscount = 10 * cart[i].quantity;
        } else if ((cart[i].id == 3) && (cart[i].quantity >= 10)) {
            cart[i].subtotalWithDiscount = (cart[i].price * (2/3)) * cart[i].quantity;
        } else {
            cart[i].subtotalWithDiscount = cart[i].subtotal;
        }
        
    } 
}

// Exercise 6 
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    let cartListString = "";
    let totalCostPromotions = 0;
    for (i=0; i<cart.length; i++) {
        cartListString += "<tr>";
        cartListString += "<th scope='row'>";
        cartListString += cart[i].name;
        cartListString += "</th>";
        cartListString += "<td>";
        cartListString += "$" + cart[i].price;
        cartListString += "</td>";
        cartListString += "<td>";
        cartListString += cart[i].quantity;
        cartListString += "</td>";
        cartListString += "<td>";
        cartListString += "$" + cart[i].subtotalWithDiscount.toFixed(2);
        cartListString += "</td>";
        cartListString += "</tr>";

        totalCostPromotions += cart[i].subtotalWithDiscount;
    }
    document.getElementById("cart_list").innerHTML = cartListString;
    document.getElementById("total_price").innerHTML = totalCostPromotions.toFixed(2);
}

function calculateNumProducts() {
    let i;
    let nProducts = 0;

    for (i=0; i<cart.length; i++) {
        nProducts += cart[i].quantity
    }

    return nProducts;
}

// ** Nivell II **

// Exercise 8 ok
function addToCart(id_selected) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    let productSelected = products.find(product => product.id === id_selected);
    let indexProdSel = cart.findIndex(newitem => newitem.id === id_selected);
    if (indexProdSel === -1) {
        let newItem = {
            id: productSelected.id,
            name: productSelected.name,
            price: productSelected.price,
            type: productSelected.type,
            quantity: 1
        };
        newItem.subtotal = (newItem.quantity * newItem.price);
        cart.push(newItem);
    } else {
        cart[indexProdSel].quantity++;
        cart[indexProdSel].subtotal = (cart[indexProdSel].quantity * cart[indexProdSel].price);
    }
    
    applyPromotionsCart()
    document.getElementById("count_product").innerHTML = calculateNumProducts();
    
}

// Exercise 9
function removeFromCart(id_selected) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    let indexProdSel = cart.findIndex(newitem => newitem.id === id_selected);
    if (indexProdSel !== -1) {
        if (cart[indexProdSel].quantity > 1){
            cart[indexProdSel].quantity--;
            cart[indexProdSel].subtotal = (cart[indexProdSel].quantity * cart[indexProdSel].price);
        } else {
            cart.splice(indexProdSel, 1);
        }
    }
    
    applyPromotionsCart()
    document.getElementById("count_product").innerHTML = calculateNumProducts();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}