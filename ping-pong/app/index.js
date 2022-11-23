// Variaveis da Bolinha
let xBolinha = 325
let yBolinha = 200
let diametro = 15
let raio = diametro/2

//Variaveis de Velocidade da Bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//Variaveis da Raquete 1
let xRaquete = 5;
let yRaquete = 150;
let colidiu = false

//DIMENSOES RAQUETE
let raqueteAltura = 10;
let raqueteComprimento = 80;

//Variaveis do Oponente
let xRaqueteOponente = 635;
let yRaqueteOponente = 150;
let velocidadeYOponente;


function setup() {
  createCanvas(650, 400);
}

function draw() {
  background(0);
  mostrarBolinha();
  movimentarBolinha();
  colisaoDaBolinha();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  colisaoDaRaqueteBiblioteca();
  mostraRaqueteOponente(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
}

function mostrarBolinha()  {
  circle(xBolinha, yBolinha, diametro);
}

function movimentarBolinha()  {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function colisaoDaBolinha()  {
  if(xBolinha + raio> width || xBolinha - raio <0){
    velocidadeXBolinha *=-1;
  }
  if(yBolinha + raio> height || yBolinha - raio <0){
    velocidadeYBolinha *=-1;
  }
}

function mostraRaquete(x,y)  {
  rect(x, y, raqueteAltura, raqueteComprimento);
}

function movimentaMinhaRaquete()  {    
  if(keyIsDown(UP_ARROW)) {
     yRaquete -= 10;
     }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete()  {
  if(xBolinha - raio < xRaquete + raqueteAltura &&
    yBolinha - raio < yRaquete + raqueteComprimento && 
    yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}

function colisaoDaRaqueteBiblioteca()  {
  colidiu = collideRectCircle(xRaquete, yRaquete, raqueteAltura, raqueteComprimento, xBolinha, yBolinha, raio);
  
  if(colidiu)  {
    velocidadeXBolinha *=-1;
  }
}

function mostraRaqueteOponente()  {
    rect(xRaqueteOponente, yRaqueteOponente, raqueteAltura, raqueteComprimento);
}

function movimentaRaqueteOponente()  {
    velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}