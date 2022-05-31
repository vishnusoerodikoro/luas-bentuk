// 1. Menghitung Luas Jajar Genjang
class luasbentuk {
    constructor(alas, tinggi, lebar, panjang, jari) {
      this.alas = alas;
      this.tinggi = tinggi;
      this.lebar = lebar;
      this.panjang = panjang;
      this.jari = jari;
    }
   
    rumusJajargenjang() {
    return this.alas * this.tinggi
    }

    hitungJajargenjang() {
        console.log(`1. Menghitung Luas Jajar Genjang. Jika diinputkan Alas : ` + this.alas + 
        ` ,dan Tinggi : ` + this.tinggi + `.\n   ,maka Luas Jajaran Genjangnya adalah = ` , this.rumusJajargenjang())
    }

    rumusSegitiga() {
        return this.alas * this.tinggi / 2
    }

    hitungSegitiga() {
        console.log(`2. Menghitung Luas Segitiga. Jika diinputkan Alas : ` + this.alas + 
        ` ,dan Tinggi : ` + this.tinggi + `.\n   ,maka Luas Segitiganya adalah = ` , this.rumusSegitiga())
    }
}

jajargenjang = new luasbentuk(10, 5)
segitiga = new luasbentuk(3, 5)

jajargenjang.hitungJajargenjang()
segitiga.hitungSegitiga()

// 2. Menghitung Luas Lingkaran
const phi = 3.14
let jari = 2
let lL = (jari) => {
    return phi * (jari*jari);
}
console.log('3. Menghitung Luas Lingkarang. Jika Jari-jarinya diinput : ' + jari + 
            '.\n   ,maka Luas Lingkarannya adalah = ' + lL(jari));