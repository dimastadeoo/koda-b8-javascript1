let r = "21"
let phi

if(typeof r !== "number"){
    console.log("Eror var R bukan number")
    return
}

if (r%7 == 0){
    phi = 22/7
}else{
    phi = 3.14
}
const L = phi * r * r
const K = 2 * phi * r

console.log("Luas Lingkaran "+L)
console.log("Keliling Lingkaran "+K)

