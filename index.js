// 1. Menghitung Luas Jajar Genjang
class Luasbentuk {
    constructor(alas, tinggi, jari, panjang, lebar, sisi) {
      this.alas = alas;
      this.tinggi = tinggi;
      this.jari = jari;
      this.panjang = panjang;
      this.lebar = lebar;
      this.sisi = sisi;
    }
   
    rumusJajargenjang() {
    return this.alas * this.tinggi
    }

    rumusSegitiga() {
        return this.alas * this.tinggi / 2
    }

    rumusLingkaran() {
        const phi = 3.14
        return this.jari**2 * phi
    }

    rumusPersegipanjang() {
        return this.panjang * this.lebar
    }

    rumusPersegi() {
        return this.sisi**2
    }
}

jjg = new Luasbentuk(10, 5)
segitiga = new Luasbentuk(3, 5)
lkg = new Luasbentuk(0, 0, 2)
psgp = new Luasbentuk(0, 0, 0, 4, 8)
psg = new Luasbentuk(0, 0, 0, 0, 0, 5)

console.log( `1. Menghitung Luas Jajar Genjang. Jika diinputkan Alas = 10, 
dan Tinggi = 5, maka Luas Jajaran Genjangnya adalah = ${jjg.rumusJajargenjang()}`)

console.log(`2. Menghitung Luas Segitiga. Jika diinputkan Alas = 3,
dan Tinggi = 5, maka Luas Segitiganya adalah = ${segitiga.rumusSegitiga()}`)

console.log(`3. Menghitung Luas Lingkaran. Jika Jari-jarinya diinput = 2,
maka Luas Lingkarannya adalah = ${lkg.rumusLingkaran()}`)

console.log(`4. Menghitung Luas Persegi Panjang. Jika panjangnya diinput = 4,
dan Lebar = 8, maka Luas Peregi Panjang adalah = ${psgp.rumusPersegipanjang()}`)

console.log(`5. Menghitung Luas Persegi Panjang. Jika sisinya diinput = 5,
maka Luas Peregi Panjang adalah = ${psg.rumusPersegi()}`)