function luasSegitiga(alas, tinggi){
    let luas
    const data = 1/2

    luas = alas * data * tinggi
    return luas
}

let x = luasSegitiga(10, 20)
console.log("luas segitiga adalah " + x)

