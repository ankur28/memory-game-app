import { useEffect, useState } from 'react/cjs/react.development'
import './App.css'
import SingleCard from './components/SingleCard'

const cardImages = [
  { "src" : "/img/helmet-1.png",matched: false},
  { "src" : "/img/potion-1.png",matched: false},
  { "src" : "/img/ring-1.png",matched: false},
  { "src" : "/img/scroll-1.png",matched: false},
  { "src" : "/img/shield-1.png",matched: false},
  { "src" : "/img/sword-1.png",matched: false},
]

function App() {
const [cards, setCards] = useState([])
const [turns, setTurns] = useState(0)
const [choiceOne, setChoiceOne] = useState(null)
const [choiceTwo, setChoiceTwo] = useState(null)


//shuffle cards
const shuffleCards = () =>{
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
}

// handle a choice 
const handleChoice = (card) => {
  choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

//compare 2 cards
useEffect(() => {
 if(choiceOne && choiceTwo){
   if(choiceOne.src === choiceTwo.src){
     setCards(prevCards => prevCards.)
     resetTurn()
   } else {
     console.log("those cards dont match")
     resetTurn()
   }
 }
}, [choiceOne, choiceTwo])

//reset choices & increase turn
const resetTurn = () => {
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns(prevTurns => prevTurns + 1)
}


  return (
    
    <><div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>
    </div>
    <div className='card-grid'>
      {cards.map(card => (
        <SingleCard 
        key={card.id} 
        card={card}
        handleChoice = {handleChoice}
        />
      ))}
      </div></>
  );
}

export default App