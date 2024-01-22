import './App.css'
import RandomPhrase from "./components/RandomPhrase.jsx";
import phrases from "./utils/phrases.json";
import randomindex from "./services/randomindex.js";
import { useState } from "react";
import Btn from './components/Btn.jsx';
import bgArray from './utils/bgArray.json';



function App() {

  const sentence = randomindex(phrases)
  const bgIndex = randomindex(bgArray)

  const [quote, setQuote] = useState(sentence)
  const [bgApp, setBgApp] = useState(bgIndex)

  const bgStyle = {
    backgroundImage: `url('../fondo${bgApp}.jpg')`,
  }
    
  return (
    <div className='Background' style={bgStyle}>
      
      <div className='container'>

        <h1>GALLETAS DE LA FORTUNA</h1>
        <div className='phrase'>

          <div className='text'>
            <RandomPhrase
              quote={quote}
            />
          </div>

        </div>
        <Btn
          setQuote={setQuote}
          setBgApp={setBgApp}
        />
      </div>
    </div>
  )
}

export default App
