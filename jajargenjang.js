class luasbentuk {
    constructor(alas, tinggi) {
      this.alas = alas;
      this.tinggi = tinggi;
    }
   
    hitungluasbentuk() {
return (this.alas * this.tinggi);
    }
}
    jajargenjang = new luasbentuk('10','5');


//console.log(hitungluasbentuk)

jajargenjang.hitungluasbentuk(5,5);
