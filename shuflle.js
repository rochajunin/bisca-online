// const suits = ['hearts', 'clubs', 'diamonds', 'spades']
// const cards = [
//     { card: 'A', value: 11 },
//     { card: '7', value: 10 },
//     { card: 'K', value: 4 },
//     { card: 'J', value: 3 },
//     { card: 'Q', value: 2 },
//     { card: '6', value: 0 },
//     { card: '5', value: 0 },
//     { card: '4', value: 0 },
//     { card: '3', value: 0 },
//     { card: '2', value: 0 }
// ];
// const deck = [];

// for (const suit of suits) {
//   for (const card of cards) {
//     deck.push({
//       suit: suit,
//       card: card.card,
//       value: card.value
//     });
//   }
// }

// console.log(deck);


// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=20')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data);
//   })
//   .catch(error => console.log('Erro ao gerar o baralho:', error));

// 1. Criar um novo baralho
// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?cards=AS,2S,3S,4S,5S,6S,7S,JS,QS,KS,AC,2C,3C,4C,5C,6C,7C,JC,QC,KC,AD,2D,3D,4D,5D,6D,7D,JD,QD,KD,AH,2H,3H,4H,5H,6H,7H,JH,QH,KH')
//   .then(res => res.json())
//   .then(data => {
//     console.log('ID do baralho sem 8, 9 e 10:', data);
//   });


export async function shuflle(){
  // let deck = []; // Lista de cartas ativas no jogo

  const res = await fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=52')
  const data = await res.json();
  const deck = data.cards.filter(carta => !['8', '9', '10'].includes(carta.value));
  // console.log(deck);
  // console.log(deck.length);
  return deck
  
}


// removerCarta("AS");

