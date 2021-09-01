const myPhone = [
    { name: 'apple', price: 220, color: 'golden', product: 'best' },
    { name: 'samsung', price: 120, color: 'black', product: 'best' },
    { name: 'lenovo', price: 250, color: 'black', product: 'motamoti' },
    { name: 'redmi', price: 80, color: 'green', product: 'best' },
    { name: 'realme', price: 110, color: 'red', product: 'valo' },
    { name: 'nokia', price: 50, color: 'golden', product: 'motamoti' },
    { name: 'Google', price: 220, color: 'yello', product: 'valo' }
]

const result = myPhone.filter(mp => mp.product == 'best')
console.log(result);



