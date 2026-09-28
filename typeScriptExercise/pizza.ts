type Pizza = {
    id: number
    name : string
    price: number
}
type Oder ={
    id:number
    pizza: Pizza
    status: "ordered" | "Completed"
}

let cashInRegister:number = 100;
let nextOrderId = 1;
let nextPizzaId =1;
let orderQueue:Oder[] = [];

let menu: Pizza[]= [
    { id: nextPizzaId++,name: "Margherita", price: 8 },
    { id: nextPizzaId++,name: "Pepperoni", price: 10 },
    { id: nextPizzaId++,name: "Hawaiian", price: 10 },
    { id: nextPizzaId++,name: "Veggie", price: 9 },
]



function addNewPizza(pizzaObj:Pizza): void {
    
    pizzaObj.id = nextPizzaId++;
    menu.push(pizzaObj)
}

function placeOrder(pizzaName:string) :Oder|undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza){
        throw new Error('no pizaa');
    }
    cashInRegister += selectedPizza.price
    const newOrder:Oder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }

    orderQueue.push(newOrder)
    return newOrder
}

function completeOrder(orderId:number):Oder|undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if(!order){
        throw new Error('no oder');
    }
    order.status = "Completed"
    return order
}


function getpizzaDetail(identifier:string | number):Pizza|undefined{
 if (typeof(identifier)=== 'string'){
    return menu.find((pizza)=>pizza.name.toLowerCase()===identifier.toLowerCase());
 }else if(typeof(identifier)==='number'){
    return menu.find((pizza)=>pizza.id===identifier)
 }else{
    throw new Error('the value should be of type string or number');
 }
}




addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)


export{}