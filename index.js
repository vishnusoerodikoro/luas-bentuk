// 1. Menghitung Luas Jajar Genjang
class luasbentuk {
    constructor(alas, tinggi) {
      this.alas = alas;
      this.tinggi = tinggi;
    }
   
    hitungluasbentuk() {
    return (this.alas * this.tinggi);
    }

    hitung() {
        console.log(`1. Menghitung Luas Jajar Genjang. Jika diinputkan Alas : ` + this.alas + 
        ` ,dan Tinggi : ` + this.tinggi + `.\n   ,maka Luas Jajaran Genjangnya adalah = ` , this.hitungluasbentuk());
    }
}
    jajargenjang = new luasbentuk('10','5');


//console.log(hitungluasbentuk)

jajargenjang.hitung();



// 2. Menghitung Luas Lingkaran
const phi = 3.14
let jari = 2
let lL = (jari) => {
    return phi * (jari*jari);
}
console.log('2. Menghitung Luas Lingkarang. Jika Jari-jarinya diinput : ' + jari + 
            '.\n   ,maka Luas Lingkarannya adalah = ' + lL(jari));
