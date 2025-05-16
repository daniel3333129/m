def on_gesture_shake():
    basic.show_number(randint(1, 6))
    basic.pause(500)
    basic.clear_screen()
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.show_icon(IconNames.HAPPY)