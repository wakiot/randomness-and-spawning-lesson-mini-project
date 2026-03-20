namespace SpriteKind {
    export const poison = SpriteKind.create()
}
scene.onHitWall(SpriteKind.poison, function (sprite, location) {
    sprites.destroy(sprite)
})
info.onCountdownEnd(function () {
    if (info.score() >= 10) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite2, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
info.onScore(10, function () {
    info.setLife(3)
})
scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprites.destroy(sprite)
})
info.onLifeZero(function () {
    game.gameOver(false)
    game.setGameOverMessage(false, "GAME OVER!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.poison, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite)
})
let maize: Sprite = null
let poison: Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`level1`)
let chucky = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
chucky.ay = 1000
pause(2000)
controller.moveSprite(chucky, 250, 0)
info.setScore(0)
scene.cameraFollowSprite(chucky)
info.startCountdown(60)
info.setLife(3)
game.onUpdateInterval(12000, function () {
    poison = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f f . . f f f f f . . . . . . 
        . f . . . . . . f f f f . . . . 
        . f . f f f f f . f f f . . . . 
        . f f f . . 2 2 2 . f f f . . . 
        . f . . . 2 2 . 2 . f . f . . . 
        . f . . . 2 . . 2 . f . f . . . 
        . f f . . 2 2 2 2 . f . . f . . 
        . . f . . 2 2 . f f f . . f . . 
        . 2 f f . f f f f . . . f f . . 
        . 2 2 . f f f . . . f f . . . . 
        . . 2 2 2 . f f f f . . . . . . 
        . . . . 2 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.poison)
    poison.ay = 70
    poison.setPosition(randint(0, 150), randint(0, 0))
    poison.setStayInScreen(true)
})
game.onUpdateInterval(2000, function () {
    maize = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . 5 5 . . . . . . . . . 
        . . . . 5 5 5 . . . . . . . . . 
        . . . . 5 5 5 . . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . 5 5 5 5 . . . . . . . . 
        . . . . 5 1 5 5 . . . . . . . . 
        . . . . 5 1 5 5 . . . . . . . . 
        . . . 5 5 1 5 5 5 . . . . . . . 
        . . . 5 5 1 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        . . . . . 5 5 5 . . . . . . . . 
        `, SpriteKind.Food)
    maize.ay = 50
    maize.setPosition(randint(0, 120), randint(0, 0))
    maize.setStayInScreen(true)
})
