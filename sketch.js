//Create variables here

var Dog,happyDog,database,foodS,foodStock
var DogImage1,DogImage2

function preload()
{
  //load images here
  DogImage1 = loadImage("images/dogImg.png")
  DogImage2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  
  database = firebase.database()

  foodStock = database.ref("Food")
  foodStock.on('value',readStock,writeStock)

  Dog = createSprite(250,325)
  Dog.addImage('Dog',DogImage1)
  Dog.scale = 0.2
  
}


function draw() {  

  background(46,139,87)

  if(keyCode === 72){
    writeStock(foodS)
    Dog.addImage('images/dogImg1.png')
  }

  drawSprites();

  fill('black')
  textSize(20)
  stroke(20)
  text("Note : Press Up Arrow Key To Feed Milk ",70,50)
  //add styles here

}

function writeStock(data){
    foodS = data.val();
}

function readStock(x){
  database.ref('x').set({
    Food : x
  })
}

