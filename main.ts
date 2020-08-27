effects.starField.startScreenEffect()
let spacePlane = sprites.create(img`
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
controller.moveSprite(spacePlane)
info.setLife(3)
