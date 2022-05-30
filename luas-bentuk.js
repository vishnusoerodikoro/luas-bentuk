class luasbentuk {
    constructor(alas, tinggi, lebar, panjang) {
      this.alas = alas;
      this.tinggi = tinggi;
      this.lebar = lebar;
      this.panjang = panjang;
    }
   
    rumusJajargenjang() {
        return this.alas * this.tinggi
    }

    rumusSegitiga() {
        return this.alas * this.tinggi / 2
    }
}
    jajargenjang= new luasbentuk(5, 20)
    segitiga = new luasbentuk(2, 5)

console.log(jajargenjang.rumusJajargenjang())
console.log(segitiga.rumusSegitiga())
