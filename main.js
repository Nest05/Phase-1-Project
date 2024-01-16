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
const random  = document.createElement('button');
random.textContent = 'Random Quote';
const authorQuote = document.createElement('button');
authorQuote.textContent = 'Author Quotes';
const quotes = document.getElementById('quotes');
const selector = document.querySelector('select');

// random.addEventListener('click', (e) => {
//    e.stopPropagation();
//    fetch('https://api.gameofthronesquotes.xyz/v1/random/5')
//    .then(res => res.json())
//    .then(quotes => {
//     console.log(quotes);

//     quotes.forEach(quote => {
    
//     console.log(quote.sentence);
//     console.log(quote.character.name);
//     console.log(quote.character.house.name);
// })
// })
// .catch(error => console.log(error))
// })
// quotes.appendChild(random);  

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
    console.log(characters)

    characters.forEach(character => {
        console.log(character.name);
        const characterName = document.createElement('option');
        characterName.textContent = character.name;
        


        selector.appendChild(characterName);
    })

})
})