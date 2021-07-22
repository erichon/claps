input.onButtonPressed(Button.A, function () {
    times += 1
    basic.showNumber(times)
    count = times * 1000
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    times += -1
    basic.showNumber(times)
    count = times * 1000
})
let times = 0
let count = 0
let toggle = false
count = 1000
times = 3
basic.showNumber(times)
basic.forever(function () {
    if (input.soundLevel() > 80) {
        if (toggle == false) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.showIcon(IconNames.Heart)
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
    if (count <= 0) {
        music.playMelody("C5 B A G F E D C ", 64)
        toggle = false
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        count = times * 1000
        basic.showNumber(times)
    }
    if (toggle == true) {
        basic.pause(100)
        count += -100
    }
})
