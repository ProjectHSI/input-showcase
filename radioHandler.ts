radio.onReceivedValue(function (name, value) {

    switch (name) {

        case "a":
            led.plotBrightness(0, 1, value)
            break;

        case "b":
            led.plotBrightness(1, 1, value)
            break;

        case "s":
            led.plotBrightness(2, 1, value)
            break;

        case "lp":
            led.plotBrightness(3, 1, value)
            break;

        case "sl":
            led.plotBrightness(4, 1, value)
            break;

        case "ll":
            led.plotBrightness(3, 3, value)
            break;

        case "temp":
            led.plotBrightness(4, 3, value)
            break;

        case "p0":
            led.plotBrightness(0, 3, value)
            break;

        case "p1":
            led.plotBrightness(1, 3, value)
            break;

        case "p2":
            led.plotBrightness(2, 3, value)
            break;

    }
    
})