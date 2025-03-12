const data = [{id:1,name: "abul", address:"kochu khet"}]

console.log(data[0].address);

const products = {
    count: 5000,
    data: [
        {id:1,name:"lenovo laptop",price:650000},
        {id:2,name:"macbook",price:156000}
    ]
}
// second product price 
console.log(products.data[1].price);


const user = {
    id: 5001,
    name: "shoriful islam",
    address: {
        street: {
            first : "54/1 uttor side",
            second : "poribag er goli",
            third: "no dorai"
        },
        city: "Dhaka"
    }
}

const user2 = {
    name: "taowaf",
    address: {
        city:"poribag",
        country: "bangladesh"
    }
}

console.log(user.address.street?.second);
console.log(user2.address.street?.second);


