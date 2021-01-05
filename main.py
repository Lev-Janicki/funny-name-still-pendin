light.set_brightness(1060)
while True:
    if input.light_level() <= 3:
        pause(3000)
        light.set_all(color.rgb(255,0,255))
        pause(1000)
        light.clear()
    else:
        light.clear()