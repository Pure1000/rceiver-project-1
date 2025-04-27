radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
    serial.writeValue("Celsius", receivedNumber)
    basic.showString("" + (receivedNumber))
})
basic.showString("RCEIVER")
radio.setGroup(42)
basic.forever(function () {
	
})
