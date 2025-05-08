export async function randCard(deck) {
    // Verifica se o deck não está vazio
    if (deck.length === 0) {
      console.log("Erro: O deck está vazio!");
      return null;
    }
  
    // Sorteia uma carta aleatória do deck
    const randomIndex = Math.floor(Math.random() * deck.length);
    const card = deck.splice(randomIndex, 1)[0]; 
    // console.log("Carta sorteada:", card);
    return card; 
  }


  //como pegar:
  // const carta = randCard(deck.map(object => object.code));