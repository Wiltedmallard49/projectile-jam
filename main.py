def on_a_pressed():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
            . . . . . . . . 5 . . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . .
        """),
        spacePlane,
        0,
        speed)
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

def on_on_destroyed(sprite):
    global Rock, Difficulty, speed
    Rock = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . b b b b b b . . . . . 
                    . . . . b c c c c b b b b . . . 
                    . . . c c b a c c a b a b b . . 
                    . . . c c a b b b b a b b b . . 
                    . . c c b b b a b b b a b b . . 
                    . . c c a c c c a c c c a b . . 
                    . . c c c b b c a a c c b b . . 
                    . . c c a c c c c c c c b b . . 
                    . . . c c a c c c a c c b . . . 
                    . . . . a c c c a c c . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.enemy)
    Rock.set_position(randint(10, 110), randint(10, 20))
    Rock.set_velocity(0, 50 + Difficulty)
    if info.score() > 5:
        if info.score() % 10 == 0:
            Difficulty += 1
            if info.life() < 5:
                info.change_life_by(1)
        if speed < -150:
            if info.score() % 50 == 0:
                speed += -5
    if info.score() == 150:
        game.over(True, effects.confetti)
sprites.on_destroyed(SpriteKind.enemy, on_on_destroyed)

def on_on_overlap(sprite, otherSprite):
    Rock.set_position(randint(10, 110), 0)
    Rock.destroy()
    projectile.destroy()
    info.change_score_by(1)
sprites.on_overlap(SpriteKind.projectile, SpriteKind.enemy, on_on_overlap)

projectile: Sprite = None
speed = 0
Difficulty = 0
Rock: Sprite = None
spacePlane: Sprite = None
effects.star_field.start_screen_effect()
spacePlane = sprites.create(img("""
        . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . 2 4 4 4 4 2 . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 2 8 2 2 2 2 8 2 2 . . . 
            . . 2 2 2 8 2 2 2 2 8 2 2 2 . . 
            . . 2 2 2 8 2 2 2 2 8 2 2 2 . . 
            . . 2 2 8 8 2 2 2 2 8 8 2 2 . . 
            . . 2 2 2 8 2 2 2 2 8 2 2 2 . . 
            . . 2 2 2 8 2 2 2 2 8 2 2 2 . . 
            . . . 2 2 8 2 2 2 2 8 2 2 . . . 
            . . . 2 2 8 2 2 2 2 8 2 2 . . . 
            . . . 2 2 4 2 2 2 2 4 2 2 . . . 
            . . . 2 2 4 2 2 2 2 4 2 2 . . . 
            . . . 2 4 . 4 2 2 4 . 4 2 . . . 
            . . . 2 . . . 2 2 . . . 2 . . .
    """),
    SpriteKind.player)
spacePlane.set_flag(SpriteFlag.STAY_IN_SCREEN, True)
spacePlane.set_position(80, 100)
controller.move_sprite(spacePlane, 150, 150)
Rock = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . b c c c c b b b b . . . 
            . . . c c b a c c a b a b b . . 
            . . . c c a b b b b a b b b . . 
            . . c c b b b a b b b a b b . . 
            . . c c a c c c a c c c a b . . 
            . . c c c b b c a a c c b b . . 
            . . c c a c c c c c c c b b . . 
            . . . c c a c c c a c c b . . . 
            . . . . a c c c a c c . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.enemy)
Rock.set_velocity(0, 50 + Difficulty)
Rock.set_position(randint(10, 110), randint(10, 20))
Difficulty = 0
speed = -100
info.set_life(1)

def on_forever():
    if Rock.y >= 120:
        Rock.destroy()
        info.change_life_by(-1)
forever(on_forever)
