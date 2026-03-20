info.onCountdownEnd(function on_countdown_end() {
    if (info.score() >= 10) {
        game.gameOver(true)
        game.setGameOverEffect(true, effects.confetti)
    } else {
        game.gameOver(false)
        game.setGameOverMessage(false, "GAME OVER!")
    }
    
})
info.onScore(10, function on_on_score() {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Food, function on_hit_wall(sprite: Sprite, location: tiles.Location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function on_on_overlap(sprite2: Sprite, otherSprite: Sprite) {
    info.changeScoreBy(1)
    sprites.destroy(otherSprite)
})
let maize : Sprite = null
scene.setBackgroundColor(9)
tiles.setCurrentTilemap(tilemap`
    level1
    `)
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
game.onUpdateInterval(2000, function on_update_interval() {
    
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
