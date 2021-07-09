let toggle = false
basic.forever(function () {
    if (input.soundLevel() > 50) {
        if (toggle == false) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showNumber(1)
            toggle = true
        } else {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            pins.digitalWritePin(DigitalPin.P0, 0)
            toggle = false
        }
    }
})
