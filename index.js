let phi
let L
let K

function hitungLuasKelLing(r){
    if(typeof r !== "number"){
        console.log("Eror var R bukan number")
        return
    }

    if (r%7 == 0){
        phi = 22/7
    }else{
        phi = 3.14
    }
    L = phi * r * r
    K = 2 * phi * r
    console.log("Luas Lingkaran "+L)
    console.log("Keliling Lingkaran "+K)

}

hitungLuasKelLing(21)
