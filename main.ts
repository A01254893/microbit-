basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() == 10) {
        basic.showString("Vamos a esquiar")
    } else if (input.temperature() == 20) {
        basic.showString("Hágamos un picnic")
    } else if (input.temperature() == 30) {
        basic.showString("Vamos a la playa")
    } else if (input.temperature() == 40) {
        basic.showString("Mejor no salgas")
    } else {
    	
    }
})
