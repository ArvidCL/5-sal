controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.vy = -200
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    Level_number += 1
    ChangeLevel(Level_number)
})
function ChangeLevel (Level_number: number) {
    if (Level_number == 0) {
        tiles.setCurrentTilemap(tilemap`Indgang til via`)
        game.showLongText("Hej Kasper. Du er nu ankommet til Via University College du har 5 min til din lektion med X-holdet starter", DialogLayout.Full)
    } else if (Level_number == 1) {
        tiles.setCurrentTilemap(tilemap`level 1`)
        tiles.placeOnRandomTile(Hero, sprites.dungeon.stairLadder)
        game.showLongText("Velkommen til 1.etage", DialogLayout.Bottom)
    } else if (Level_number == 2) {
        tiles.setCurrentTilemap(tilemap`Level 5`)
        tiles.placeOnRandomTile(Hero, sprites.dungeon.stairLadder)
        Dragon = sprites.create(assets.image`Dragon`, SpriteKind.Enemy)
        Big_Dragon = sprites.create(assets.image`Big Dragon`, SpriteKind.Enemy)
        animation.runImageAnimation(
        Big_Dragon,
        assets.animation`Big dragon animation`,
        500,
        true
        )
        tiles.placeOnRandomTile(Dragon, sprites.dungeon.hazardLava1)
        tiles.placeOnRandomTile(Big_Dragon, assets.tile`myTile5`)
    } else if (Level_number == 3) {
    	
    } else if (Level_number == 4) {
    	
    } else if (Level_number == 5) {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    Level_number += 1
    ChangeLevel(Level_number)
})
let Big_Dragon: Sprite = null
let Dragon: Sprite = null
let Hero: Sprite = null
let Level_number = 0
ChangeLevel(Level_number)
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
