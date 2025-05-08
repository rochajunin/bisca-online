import { WebSocketServer } from 'ws';
import { randCard } from "./randCard.js";
import { shuflle } from "./shuflle.js"

const wss = new WebSocketServer({ port: 8080 });
let players = []
let pointsA = 0
let pointsB = 0
const MAX_USERS = 4 

wss.on('connection', (ws) => {
  if (players.length < 4) {
    console.log("novo jogador conectado")
    players.push(ws)
    ws.send("conectado");
  } else {
    console.log("servidor cheio! aguarde. ");
    ws.send("Servidor cheio! Tente novamente mais tarde.");
    ws.close();
  }
  if (players.length == 4) {
    start()
  } 
  ws.on('close', () => {
    console.log("Jogador desconectado.");
    players = players.filter(p => p !== ws); // remove da lista
    console.log(`Jogadores conectados: ${players.length}`);
  }); 
})

console.log(players);

async function start() {
  const deck = await shuflle();
  console.log("Cartas embaralhadas:", deck.map(object => object.code));
  // players.forEach((element) => console.log(element)) 



  

  console.log("Servidor rodando na porta 8080");
}


console.log("rodando na porta 8080");