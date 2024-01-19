import './App.css'
import RandomPhrase from "./components/RandomPhrase.jsx";
import phrases from "./utils/phrases.json";
import imgs from "./utils/imgurls.json"
import randomindex from "./services/randomindex.js";
import { useState } from "react";
import Btn from './components/Btn.jsx';


function App() {

  const sentence = randomindex(phrases)

  const [quote, setQuote] = useState(sentence)
  
  const fondo = randomindex(imgs)
  
  const [fondillo, setFondillo] = useState(fondo)


  return (
    <div className='Background'>
      
      <div className='container'>

        <h1>Galletas de la fortuna</h1>
        <div className='phrase'>

          <p>
            <RandomPhrase
              quote={quote}
            />
          </p>

        </div>
        <Btn
          setQuote={setQuote}
        />
      </div>
    </div>
  )
}

export default App
