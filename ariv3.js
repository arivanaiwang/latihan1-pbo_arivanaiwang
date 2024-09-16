let nama
let umur

nama = prompt("siapa nama anda?")
umur = prompt("Berapa umur anda?")


if(umur < 20){
    alert("Selamat datang " + nama + " usia anda " + umur + ", anda masih belum cukup umur.")
}else if (umur < 15 && umur >= 15){
    alert("Selamat datang " + nama + " usia anda " + umur + ", anda belum cukup umur, anda terlalu muda.")
}else{
    alert("Selamat datang " + nama + " usia anda " + umur + ", anda sudah cukup umur, usia anda cukup.")
}
