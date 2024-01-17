/*
APIs
-> https://api.gameofthronesquotes.xyz/v1/houses ---> Houses with their members
-> https://api.gameofthronesquotes.xyz/v1/house/lannister ---> A house with it's details
-> https://api.gameofthronesquotes.xyz/v1/characters  ---> All characters with their quotes
-> https://api.gameofthronesquotes.xyz/v1/character/jon  ---> Character with his/her quotes
-> https://api.gameofthronesquotes.xyz/v1/author/tyrion/2 ---> quotes from a character
-> https://api.gameofthronesquotes.xyz/v1/random/5 ---> several random quotes
-> https://api.gameofthronesquotes.xyz/v1/random ---> get random quote

*/
document.addEventListener('DOMContentLoaded', () => {
const mainContainer = document.getElementById('container');
const random  = document.createElement('button');
random.classList.add('random')
random.textContent = 'Random Quote';
const authorQuote = document.createElement('button');
authorQuote.textContent = 'Author Quotes';
const quotes = document.getElementById('quotes');
const selector = document.querySelector('select');

random.addEventListener('click', (e) => {
   e.stopPropagation();
   fetch('https://api.gameofthronesquotes.xyz/v1/random')
   .then(res => res.json())
   .then(quote => {
    const randomDiv = document.createElement('div');
    const randomQuote = document.createElement('p');
    randomQuote.textContent = quote.sentence;
    const authorOfQuote = document.createElement('h4');
    authorOfQuote.textContent = 'Author: ' + quote.character.name;
    randomDiv.appendChild(randomQuote);
    randomDiv.appendChild(authorOfQuote);

    quotes.innerHTML = '';
    quotes.appendChild(randomDiv); 
})
.catch(error => console.log(error))
})
mainContainer.appendChild(random);

// authorQuote.addEventListener('click', (e) => {
//     e.stopPropagation();
//     fetch('https://api.gameofthronesquotes.xyz/v1/author/tyrion/100')
//     .then(res => res.json())
//     .then(tyrions => console.log(tyrions))
// })
// quotes.appendChild(authorQuote);
// })

fetch('https://api.gameofthronesquotes.xyz/v1/characters')
.then(res => res.json())
.then(characters => {
    // console.log(characters);

    characters.forEach(character => {
        //  console.log(character.quotes[0]);

        const characterName = document.createElement('option');
        characterName.textContent = character.name;
        characterName.value = character.name;

        selector.appendChild(characterName);
    });
        selector.addEventListener('change', () => {

            const selectedCharacter = characters.find(character => character.name === selector.value);

            if(selectedCharacter){

                const quoteContainer = document.createElement('div');

                const houseName = document.createElement('h2');
                    if (selectedCharacter.house && selectedCharacter.house.name){
                        houseName.textContent = selectedCharacter.house.name;
                    }else {
                        houseName.textContent = 'House Unknown';
                    }
                    quoteContainer.appendChild(houseName);

                    selectedCharacter.quotes.forEach(quote => {
                        const characterQuote = document.createElement('p');
                        characterQuote.textContent = '-> ' + quote;
                        quoteContainer.appendChild(characterQuote);
                })
            quotes.innerHTML = '';
            quotes.appendChild(quoteContainer);
            
        }
        });
})
.catch(error => console.log(error))

})