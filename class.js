const products = [
    {id:1,name: "lenovo", price:65000},
    {id:2,name: "dell", price:45000},
    {id:3,name: "hp", price:37000}

]

class Product{
    country = "bangladesh";
    speak(talk){
        console.log(`talking about ${talk}`);
        
    }
}

const lenove = new Product();
console.log(lenove);
lenove.speak( "obai kita kou");
