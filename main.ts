input.onGesture(Gesture.Shake, function on_gesture_shake() {
    basic.showNumber(randint(1, 6))
    basic.pause(500)
    basic.clearScreen()
})
basic.showString("Hello! I am dice")
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
