controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = -200
    }
    mySprite.ay = 500
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.score()
    web.open("https://115.111.238.147:889/api/ECommReflection?playername=" + info.score() + "&score=" + info.score())
    game.over(false)
})
let projectile: Sprite = null
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . 5 . 5 . . . . . . 
    . . . . . f f 5 5 5 f . . . . . 
    . . . . f 6 1 5 2 5 1 f . . . . 
    . . . f 6 1 6 6 6 6 6 1 f . . . 
    . . . f 1 6 f f f f 6 6 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 d f f . . 
    . . f d d f 3 5 5 3 f d d f . . 
    . . . f f 3 3 3 3 3 3 f f . . . 
    . . . f 3 3 5 3 3 5 3 3 f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 5))
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . e e e e e e e e e e e e e e . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        . e e e e e e e e e e e e e e . 
        . e e e e e e e e e e e e e e . 
        . e 1 1 1 1 1 1 1 1 1 1 1 1 e . 
        . e e e e e e e e e e e e e e . 
        . . . . e e e e e e e e . . . . 
        . . . . e e e e e e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, randint(-100, -80), 0)
    tiles.placeOnTile(projectile, tiles.getTileLocation(9, 5))
})
