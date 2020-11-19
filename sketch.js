//Create variables here
var dog, happyDog, database, foodS, foodStock

function preload()
{
  //load images here
  dog=loadImage(dog.png)
  happyDog=loadImage(dogHappy.png)
  database=firebase.database()
  foodStock=database.ref('Food')
  foodStock.on("value", readstock)
}

function setup() {
  createCanvas(500, 500);
  dog=createSprite(400,375,30,70)
  dog.addImage(dog)
  
}


function draw() {  
  bakcground(46, 139, 87)

  if (keyWentDown(UP_ARROW)) {
    writeStock(foodS)
    dog.addImage(happyDog)
  }

  drawSprites();
  //add styles here
  textSize=13
  fill("white")
  stroke("black")
  text("Note:press up arrow to feed your dog!")

}

function readstock(data) {
  foodS.data.val()
}

function writeStock(x) {
  if (x<=0) {
    x=0
  }
  else {
    x=x-1
  }
  database.ref('/').update({
    Food:x
  })
}