var num = [5,8,2,9,3]

num.push(1) // adiciona valor 1 ao vetor
num.sort() // ordem crescente

console.log(num)
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

var pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)