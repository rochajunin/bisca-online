// const player1 = new WebSocket('ws://localhost:8080');
// const player2 = new WebSocket('ws://localhost:8080');
// const player3 = new WebSocket('ws://localhost:8080');
// const player4 = new WebSocket('ws://localhost:8080');

// simulaPlayers.js
import { WebSocket } from 'ws';

function criaPlayer(nome, duracao = 3000) {
  const player = new WebSocket('ws://localhost:8080');

  player.on('open', () => {
    console.log(`${nome} entrou na sala`);
    player.send(`${nome} chegou!`);
  });

  player.on('message', (msg) => {
    console.log(`${nome} ouviu: ${msg}`);
  });

  player.on('close', () => {
    console.log(`${nome} saiu da sala`);
  });

  player.on('error', (err) => {
    console.error(`${nome} teve erro: ${err.message}`);
  });

  setTimeout(() => {
    if (player.readyState === WebSocket.OPEN) {
      console.log(`${nome} se desconectando...`);
      player.close();
    }
  }, duracao);
}

// 🎮 Simula 5 players entrando com delay entre eles
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    criaPlayer(`Player${i}`, 4000 + i * 1000);
  }, i * 1000);
}
