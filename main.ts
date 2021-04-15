namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -95
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    current_level += 1
    startlevel()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
function startlevel () {
    if (current_level == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else if (false) {
    	
    } else {
        tiles.setTilemap(tilemap`level2`)
    }
    mySprite.ay = 200
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
    for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
        mySprite2 = sprites.create(img`
            . . . f f . . . 
            . . f 5 5 1 . . 
            . f 5 1 d 5 1 . 
            . f 5 1 3 5 1 . 
            . f 4 1 3 5 c . 
            . f 4 4 1 5 c . 
            . . f 4 4 f . . 
            . . . f f . . . 
            `, SpriteKind.coin)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
}
let mySprite2: Sprite = null
let mySprite: Sprite = null
let current_level = 0
scene.setBackgroundColor(11)
current_level = 0
mySprite = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f e e e e e e f . . . . 
    . . . . f e e f d d f f . . . . 
    . . . . f e e d d d d f . . . . 
    . . . . f d d d d d d f . . . . 
    . . . . . f f d d f f . . . . . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
    . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
    . f 7 7 f 7 7 7 7 7 7 f 7 7 f . 
    . f d d f 7 7 7 7 7 7 f d d f . 
    . f d d f f f f f f f f d d f . 
    . . f f f 7 7 7 7 7 7 f f f . . 
    . . . . f 7 7 7 7 7 7 f . . . . 
    . . . . f 7 f f f f 7 f . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
startlevel()
