///<reference path=".vscode/p5.global-mode.d.ts" />
"use strict"
let mandje;
let appels = [];
let score = 0;

class Mandje {
  constructor(_color = "limegreen", _width = 150, _height = 20, _maxSpeed = 4000, _maxAcc = 400000, _x = 100, _y = 650){
    this.color = _color;
    this.width = _width;
    this.height = _height
    this.maxAcc = _maxAcc;
    this.maxSpeed = _maxSpeed;
    this.x = _x;
    this.y = _y;
    this.acc = 0;
    this.speed = 0;
  }
  move(){
    this.speed = ((this.x - mouseX)**2 * .02)* (mouseX - this.x > 0 ? 1 : -1);
    this.x += deltaTime/1000 * this.speed;
  }
  draw(){
    stroke("orange");
    fill(this.color);
    rect(this.x - .5 * this.width, this.y, this.width, this.height);
    
  }
}

class Appel{
  constructor(_timeout = 0, _acc = .0007, _randomizeX = false, _x = 0, _color = "red"){
    this.x = _randomizeX ? x : Math.random() * 1200 + 40;
    this.acc = _acc;
    this.startTime = performance.now() + _timeout;
    this.y = 0;
    this.edge = 30;
    this.color = _color;
  }
  move(){
    if(this.startTime > performance.now()) return;
    this.y = .5 * this.acc * ((performance.now() - this.startTime) ** 2);
  }
  draw(){
    if(this.startTime > performance.now()) return;
    fill(this.color);
    stroke("black");
    rect(this.x - .5 * this.edge, this.y - .5 * this.edge, this.edge);
  }
}

function checkCollision(appel, mandje){
  let y_condition = appel.y < mandje.y + .5 * mandje.height && appel.y > mandje.y - 1 * mandje.height;
  let x_condition = appel.x < mandje.x + .5 * mandje.width && appel.x > mandje.x - .5 * mandje.width;
  if(y_condition && x_condition) return true;
}

function upScore(){
  score++;
  if(score > localStorage.getItem("highscore")){
    localStorage.setItem("highscore", score);
  }
}

function setup() {
  if(!localStorage.getItem("highscore")){
    localStorage.setItem("highscore", 0);
  }

  createCanvas(1280, 720);
  mandje = new Mandje();
  appels[0] = new Appel();
}

function draw() {
  background('deepskyblue');

  for(let appel of appels){
    appel.move();
    appel.draw();
  }

  mandje.move();
  mandje.draw();

  for(let i = 0; i < appels.length; i++){
    if(checkCollision(appels[i], mandje)){
      upScore();
      appels[i] = new Appel(random() * 2000);
      if(score % (4 ** appels.length) == 0){
        appels[appels.length] = new Appel(random() * 3000 + 1000);
      }
    };
    if(appels[i].y > 700){
      appels[i] = new Appel(random() * 2000);
    }
  }

  fill("midnightblue");
  textSize(22);
  text(`Score: \n ${score} \nHighscore: \n ${localStorage.getItem("highscore")}`, 10,20);
}
