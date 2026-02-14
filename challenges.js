let products = [
    { id: 101, details: { title: "Laptop", price: 1000 }, stock: 5 },
    { id: 102, details: { title: "Mouse", price: 50 }, stock: 0 },
    { id: 103, details: { title: "Monitor", price: 300 }, stock: 12 },
    { id: 104, details: { title: "Keyboard", price: 80 }, stock: 0 }
];

let a = products
.filter( m => m.stock > 0 )
.map( m=> m.details.title)

console.log(  ` متوفر ${a.length} في المخزون  \n${a.join(' ')} ` )


