controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vy = -200
})
function ChangeLevel (Level_number: number) {
    if (Level_number == 0) {
        tiles.setCurrentTilemap(tilemap`Indgang til via`)
        game.showLongText("Hej Kasper. Du er nu ankommet til Via University College du har 5 min til din lektion med X-holdet starter", DialogLayout.Full)
    } else if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level 1`)
        tiles.placeOnRandomTile(Hero, sprites.dungeon.stairLadder)
        game.showLongText("Velkommen til 1.etage", DialogLayout.Bottom)
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    ChangeLevel(1)
})
let Hero: Sprite = null
ChangeLevel(0)
Hero = sprites.create(assets.image`Main guy`, SpriteKind.Player)
animation.runImageAnimation(
Hero,
assets.animation`Main guy walking`,
500,
true
)
controller.moveSprite(Hero, 100, 0)
Hero.ay = 600
scene.cameraFollowSprite(Hero)
tiles.placeOnRandomTile(Hero, assets.tile`græs`)
Hero.setStayInScreen(true)
