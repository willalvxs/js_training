// var da bolinha
  let xBolinha = 300;
  let yBolinha = 200;
  let diametro = 15;
  let raio = diametro / 2; 

//velocidade da bolinha 
  let velocidadeXBolinha = 6;
  let velocidadeYBolinha = 6;

// var das raquetes 
  let xRaquete = 5; 
  let yRaquete = 150; 
  let raqueteComprimento = 10;
  let raqueteAltura = 90;

  let Colide = false; 

/// var oponentes 

let xRaqueteOponente = 585;
let yRaqueteOponente = 150; 
let velocidadeYOponente; 
let velocidadeXOponente; 

// var placar do jogos
let player1 = 0;
let player2 = 0;

// var sons do jogos 
let raquetada; 
let pontos;
let trilha; 

function preload () { 
  trilha = loadSound ("./sound/trilha.mp3");
  ponto = loadSound ("./sound/ponto.mp3");
  raquetada = loadSound ("./sound/raquetada.mp3");
}



function setup() {
  createCanvas(600, 400);
  trilha.loop (); 
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha ();
  verificaColisãoBorda (); 
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete ();
  verificaColisãoRaquete (); 
  colisaoMinhaRaqueteBiblioteca (xRaquete, yRaquete); 
  colisaoMinhaRaqueteBiblioteca (xRaqueteOponente, yRaqueteOponente); 
  mostraRaquete (xRaqueteOponente, yRaqueteOponente);
  movimenteRaqueteOponente ();
  incluirPlacar (); 
  marcaPonto (); 
  bolinhaNaoFicaPresa()
}

  

function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  
}
function movimentaBolinha () {
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisãoBorda (){
  if (xBolinha + raio > width ||  xBolinha - raio < 0){
    velocidadeXBolinha *= -1;   
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1; 
  }
}

function mostraRaquete(x, y) {
    rect(x, y, raqueteComprimento, raqueteAltura);
  
}

function movimentaRaquete () {
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10; 
  }
}

function verificaColisãoRaquete () {
  if (xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha +  raio > yRaquete) {
    velocidadeXBolinha *= -1; 
    raquetada.play ();
  }
 
}

function colisaoMinhaRaqueteBiblioteca(x, y) {
  colide =
    collideRectCircle (xRaquete, yRaquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colide){
  velocidadeXBolinha *= -1;
    raquetada.play ();
  }
}

function movimenteRaqueteOponente () {
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento /2 - 30;
  yRaqueteOponente += velocidadeYOponente 
}

function incluirPlacar () {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(player1, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(player2, 470, 26);

}

function marcaPonto () {
  if (xBolinha > 590) {
    player1 += 1; 
    ponto.play ();
  }
  if (xBolinha < 10) {
    player2 += 1; 
      ponto.play ();
  }
}


function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}

