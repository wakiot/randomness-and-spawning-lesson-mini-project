def on_countdown_end():
    if info.score() >= 10:
        game.game_over(True)
        game.set_game_over_effect(True, effects.confetti)
    else:
        game.game_over(False)
        game.set_game_over_message(False, "GAME OVER!")
info.on_countdown_end(on_countdown_end)

def on_on_score():
    game.game_over(True)
    game.set_game_over_effect(True, effects.confetti)
info.on_score(10, on_on_score)

def on_hit_wall(sprite, location):
    sprites.destroy(sprite)
scene.on_hit_wall(SpriteKind.food, on_hit_wall)

def on_on_overlap(sprite2, otherSprite):
    info.change_score_by(1)
    sprites.destroy(otherSprite)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

maize: Sprite = None
scene.set_background_color(9)
tiles.set_current_tilemap(tilemap("""
    level1
    """))
chucky = sprites.create(img("""
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
        """),
    SpriteKind.player)
chucky.ay = 1000
pause(2000)
controller.move_sprite(chucky, 250, 0)
info.set_score(0)
scene.camera_follow_sprite(chucky)
info.start_countdown(60)

def on_update_interval():
    global maize
    maize = sprites.create(img("""
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
            """),
        SpriteKind.food)
    maize.ay = 50
    maize.set_position(randint(0, 120), randint(0, 0))
    maize.set_stay_in_screen(True)
game.on_update_interval(2000, on_update_interval)
