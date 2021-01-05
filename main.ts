light.setBrightness(1060)
while (true) {
    if (input.lightLevel() <= 3) {
        light.setAll(color.rgb(255, 0, 255))
        pause(1000)
        light.clear()
        pause(1000)
    } else {
        light.clear()
    }
    
}
