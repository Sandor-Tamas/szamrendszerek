let index = 0
let alap = 0
let ertek = 0
let kettes = 0
let nyolcas = 0
let tizes = 0
let tizenhatos = 0
let szamrendszer = 16
let list: number[] = []
basic.forever(function () {
    ertek = 28
    basic.showNumber(ertek)
    basic.showString(":")
    alap = ertek
    while (alap > 0) {
        list[index] = alap % szamrendszer
        index += 1
        alap = Math.trunc(alap / szamrendszer)
    }
    while (index > 0) {
        index = index - 1
        if (list[index] > 9) {
            basic.showString(String.fromCharCode(list[index] - 9 + 65))
        } else {
            basic.showNumber(list[index])
        }
        basic.showString(",")
    }
    basic.showString(";")
})
