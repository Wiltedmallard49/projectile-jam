controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    
    projectile = sprites.createProjectileFromSprite(img`
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
        `, spacePlane, 0, speed)
    music.pewPew.play()
    if (info.score() > 100) {
        
    }
    
})
sprites.onDestroyed(SpriteKind.Enemy, function on_on_destroyed(sprite: Sprite) {
    
    Rock = sprites.create(img`
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
        `, SpriteKind.Enemy)
    speed += -1
    Difficulty += 0.1
    Rock.setPosition(randint(10, 110), randint(10, 20))
    Rock.setVelocity(randint(-10, 10), 50 + Difficulty)
    if (info.score() > 5) {
        if (info.score() % 10 == 0) {
            if (info.life() < 5) {
                music.powerUp.play()
                info.changeLifeBy(1)
            }
            
        }
        
    }
    
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    Rock.destroy()
    projectile.destroy()
    info.changeScoreBy(1)
})
let projectile : Sprite = null
let speed = 0
let Difficulty = 0
let Rock : Sprite = null
let spacePlane : Sprite = null
effects.starField.startScreenEffect()
spacePlane = sprites.create(img`
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
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
spacePlane.setPosition(80, 100)
controller.moveSprite(spacePlane, 150, 150)
Rock = sprites.create(img`
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
    `, SpriteKind.Enemy)
Rock.setVelocity(randint(-10, 10), 50 + Difficulty)
Rock.setPosition(randint(10, 110), randint(10, 20))
Difficulty = 0
speed = -100
info.setLife(1)
music.playMelody("E F E G E A E D ", 120)
forever(function on_forever() {
    if (Rock.y >= 120) {
        Rock.setPosition(randint(10, 110), randint(10, 20))
        info.changeLifeBy(-1)
    }
    
})
