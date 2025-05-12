  import { WebSocketServer, WebSocket } from 'ws';
  import { randCard } from "./randCard.js";
  import { shuflle } from "./shuflle.js"

  const wss = new WebSocketServer({ port: 8080 });
  let players = []
  let pointsA = 0
  let pointsB = 0
  const MAX_USERS = 4 

  let deck0 = []
  let deck1 = []
  let deck2 = []
  let deck3 = []

  wss.on('connection', (ws) => {
    if (players.length < 4) {
      console.log("novo jogador conectado")
      players.push(ws)
      ws.send("conectado");
      distribute()
    } else {
      console.log("servidor cheio! aguarde. ");
      ws.send("Servidor cheio! Tente novamente mais tarde.");
      ws.close();
    }
    if (players.length == 4) {
      start()
    } 
    ws.on("message", function incoming(data) {
      // Converte a string recebida em objeto JSON
      let mensagem;
      try {
        mensagem = JSON.parse(data);
      } catch (err) {
        console.error("Erro ao fazer parse da mensagem:", err);
        return;
      }

      console.log("Mensagem JSON recebida:", mensagem);

      players.forEach((player) => {
        if (player.readyState === WebSocket.OPEN) {
          player.send(JSON.stringify(mensagem));
        }
      });
    });
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
    broadcast("O jogo vai começar agora!");
    console.log("Servidor rodando na porta 8080");
  }

  function broadcast(message) {
    players.forEach((player) => {
      if (player.readyState === player.OPEN) {
        player.send(message);
      }
    });
  }

  function distribute() {
    deck0 = randCard()
  }


  console.log("rodando na porta 8080");