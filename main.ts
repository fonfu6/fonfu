for (let index = 0; index <= 4; index++) {
    let dgt = 0
    led.plot(randint(0, 4), index)
    basic.pause(500)
    led.plot(dgt, index - 1)
    led.unplot(0, 0)
}
basic.forever(function () {
	
})
