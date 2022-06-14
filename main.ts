basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        led.plotBrightness(0, 0, 255)
        radio.sendValue("a", 255)
    } else {
        led.plotBrightness(0, 0, 0)
        radio.sendValue("a", 0)
    }
    if (input.buttonIsPressed(Button.B)) {
        led.plotBrightness(1, 0, 255)
        radio.sendValue("b", 255)
    } else {
        led.plotBrightness(1, 0, 0)
        radio.sendValue("b", 0)
    }
    if (input.isGesture(Gesture.Shake)) {
        led.plotBrightness(2, 0, 255)
        radio.sendValue("s", 255)
    } else {
        led.plotBrightness(2, 0, 0)
        radio.sendValue("s", 0)
    }
    if (input.logoIsPressed()) {
        led.plotBrightness(3, 0, 255)
        radio.sendValue("lp", 255)
    } else {
        led.plotBrightness(3, 0, 0)
        radio.sendValue("lp", 0)
    }
    if (input.pinIsPressed(TouchPin.P0)) {
        led.plotBrightness(0, 4, 255)
        radio.sendValue("p0", 255)
    } else {
        led.plotBrightness(0, 4, 0)
        radio.sendValue("p0", 0)
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        led.plotBrightness(1, 4, 255)
        radio.sendValue("p1", 255)
    } else {
        led.plotBrightness(1, 4, 0)
        radio.sendValue("p1", 0)
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        led.plotBrightness(2, 4, 255)
        radio.sendValue("p2", 255)
    } else {
        led.plotBrightness(2, 4, 0)
        radio.sendValue("p2", 0)
    }
    // These last few ifs have no radio sending, this is because we don't have the space on the line to send the data over to another Micro:Bit
    if (input.isGesture(Gesture.ThreeG)) {
        led.plotBrightness(0, 2, 255)
    } else {
        led.plotBrightness(0, 2, 0)
    }
    if (input.isGesture(Gesture.LogoUp)) {
        led.plotBrightness(1, 2, 255)
    } else {
        led.plotBrightness(1, 2, 0)
    }
    if (input.isGesture(Gesture.LogoDown)) {
        led.plotBrightness(2, 2, 255)
    } else {
        led.plotBrightness(2, 2, 0)
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plotBrightness(3, 2, 255)
    } else {
        led.plotBrightness(3, 2, 0)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plotBrightness(4, 2, 255)
    } else {
        led.plotBrightness(4, 2, 0)
    }
    led.plotBrightness(4, 0, input.soundLevel())
    led.plotBrightness(3, 4, input.lightLevel())
    led.plotBrightness(4, 4, input.temperature() * 7.96875)
    radio.sendValue("sl", input.soundLevel())
    radio.sendValue("ll", input.lightLevel())
    radio.sendValue("temp", input.temperature() * 7.96875)
})
