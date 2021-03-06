import { useState } from 'react/cjs/react.development'
import './App.css'

const cardImages = [
  { "src" : "/img/helmet-1.png"},
  { "src" : "/img/potion-1.png"},
  { "src" : "/img/ring-1.png"},
  { "src" : "/img/scroll-1.png"},
  { "src" : "/img/shield-1.png"},
  { "src" : "/img/sword-1.png"},
]

function App() {
const [cards, setCards] = useState([])

//shuffle cards
const shuffleCards = () =>{
  const shuffledCards = [...cardImages, ...cardImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    setCards()
}


  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button>New Game</button>
    </div>
  );
}

export default App