// export async function randCard(deck) {
//     // Verifica se o deck não está vazio
//     if (deck.length === 0) {
//       console.log("Erro: O deck está vazio!");
//       return null;
//     }
  
//     // Sorteia uma carta aleatória do deck
//     const randomIndex = Math.floor(Math.random() * deck.length);
//     const card = deck.splice(randomIndex, 1)[0]; 
//     // console.log("Carta sorteada:", card);
//     return card; 
//   }


//   //como pegar:
//   // const carta = randCard(deck.map(object => object.code));

// function embaralharArray(array) {
//     // Cria uma cópia do array para não modificar o original
//     const arrayEmbaralhado = array.slice();
  
//     // Embaralha o array usando o método sort()
//     arrayEmbaralhado.sort(() => {return Math.random() - 0.5});
  
//     return arrayEmbaralhado;
//   }
  
//   // Exemplo de uso
//   const myArray = [1, 2, 3, 4, 5];
//   const arrayEmbaralhado = embaralharArray(myArray);
  
//   console.log("Array original:", myArray);
//   console.log("Array embaralhado:", arrayEmbaralhado);

let users = [1,2,3,4,5,6]
for (let i = 0; i < users.length; i++) {
    console.log(users.sort(() => {return Math.random() - 0.5}));
}