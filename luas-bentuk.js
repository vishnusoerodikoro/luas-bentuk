class luasbentuk {
    constructor(alas, tinggi) {
      this.alas = alas;
      this.tinggi = tinggi;
    }
   
    hitungluasbentuk() {
return (this.alas * this.tinggi);
    }

    hitung() {
        console.log(`Luas Jajar Genjang` , this.hitungluasbentuk());
    }
}
    jajargenjang = new luasbentuk('10','5');


//console.log(hitungluasbentuk)

jajargenjang.hitung();

console.log(jajargenjang.hitungluasbentuk());

// Luang Lingkaran

const phi =3.14
function luasLingkaran(jari) {
    return phi * (jari*jari) ;
}

console.log((luasLingkaran (2)))
