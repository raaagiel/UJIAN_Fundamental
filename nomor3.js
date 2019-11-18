const cekkoin = (koin) => {
    output = 0
    do {
        if (koin / 25 > 0) {
            output += Math.floor(koin / 25) //supaya ga koma2
            koin += koin % 25
        }
        if (koin / 10 > 0) {
            output += Math.floor(koin / 10)
            koin += koin % 10
        }
        if (koin / 5 > 0) {
            output += Math.floor(koin / 5)
            koin += koin % 5
        }
        if (koin / 1 > 0) {
            output += Math.floor(koin / 1)
            koin += koin % 1
        }
        return output
    }
    while (koin > 0) //untuk cari kemungkinan koin
}
console.log(cekkoin(31))