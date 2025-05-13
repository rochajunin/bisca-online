export async function randCard(deck) {
    if (deck.length === 0) {
      console.log("Erro: O deck está vazio!");
      return null;
    }

    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0]; 
    // console.log("Carta sorteada:", card);
    return card; 
}

// export function broadcast(message, players) {
//     players.forEach((player) => {
//       if (player.readyState === player.OPEN) {
//         player.send(message);
//       }
//     });
// }

export function broadcast(message, players) {
    players.forEach(player => {
      if (player.readyState === player.OPEN) {
        // Garante que seja uma string JSON válida
        const mensagemFinal = typeof message === "string" ? { tipo: "sistema", mensagem: message } : message;
        player.send(JSON.stringify(mensagemFinal.mensagem));
      }
    });
  }

export async function distribute(deck, count, decks) {
    for (let i = 0; i < count; i++) {
        decks[0].push(await randCard(deck));
        decks[1].push(await randCard(deck));
        decks[2].push(await randCard(deck));
        decks[3].push(await randCard(deck));
    }
    console.log(decks.map(element => element.map(card => ({code:card.code, value:card.value, suit:card.suit}))));
    // teste para ver as crtas restantes
    console.log("cartas restantes: ", deck.map(object => object.code));
}

export function findImage(code) {
    const text = `https://deckofcardsapi.com/static/img/${code}.png`
    return text
}

export function toco(initialPlayer){
    if(initialPlayer == -1){
        initialPlayer = Math.floor(Math.random() * 4)
        return initialPlayer
    }
}