  import { WebSocketServer, WebSocket } from 'ws';
  import { shuflle } from "./shuflle.js"
  import {broadcast, distribute, findImage} from "./functions.js"

  const wss = new WebSocketServer({ port: 8080 });

  let players = [] // armazena os jogadores

  // contadores dos pontos de cada equipe
  let pointsA = 0
  let pointsB = 0

  const MAX_USERS = 4 

  let decks = [[], [], [], []]

  //contador de partidas
  let partidas = 0

  //marca quem vai comecar
  let initialPlayer = -1

  wss.on("connection", (ws) => {
    if (players.length < 4) {
      console.log("novo jogador conectado")
      players.push(ws)
      ws.send("conectado");
      
    } else {
      console.log("servidor cheio! aguarde. ");
      ws.send("Servidor cheio! Tente novamente mais tarde.");
      ws.close();
    }
    if (players.length == MAX_USERS) {
      console.log(players);
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
  });

  console.log(players);

  async function start() {
    const deck = await shuflle();
    console.log("Cartas embaralhadas:", deck.map(object => object.code));
    // players.forEach((element) => console.log(element)) 
    broadcast({ tipo: "sistema", mensagem: "O jogo vai começar agora!" }, players);
    distribute(deck, 4, decks)
    // console.log("Servidor rodando na porta 8080"); 
  }



  /*function playCard(player, card) {
    let playerNome = ''
    if (player == 0 || 1 || 2 || 3 ) {
      playerNome = 
    }
  } */


  // console.log("rodando na porta 8080");