const lelang = (menit) => { //yg dicari menit keberapa.
    awal = 10000
    for (i = 1; i <= menit; i++) { //pengecekan dimulai
        if (i % 4 == 0) {
            awal += Math.ceil(awal * (10 / 100)) //dibagi ke persen dulu /100
        }
        else {
            awal += Math.ceil(awal * (20 / 100)) //sama dibagi ke persen
        }
        if (awal >= 30000000) {
            return 'barang sudah terjual'
        }
    }
    return awal
}
console.log(lelang(2))
