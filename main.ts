light.setBrightness(1060)
while (true) {
    if (input.lightLevel() <= 3) {
        pause(3000)
        light.setAll(color.rgb(255, 0, 255))
        pause(1000)
        light.clear()
    } else {
        light.clear()
    }
    
}
