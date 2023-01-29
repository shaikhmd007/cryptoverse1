// import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Components/Homepage';
import Navbar from './Components/Navbar';
import Exchanges from './Components/Exchanges'
import News from './Components/News';
import Cryptocurrencies from './Components/Cryptocurrencies';

function App() {
  // const [showMore, setShowMore] = useState(true);
  return (
    <>
      <main>
        <Navbar />
        <section>
          <div className='Routes'>
            <Routes>
              <Route exact path='/' element />
              <Route path='/home' element={<Homepage />} />
              <Route path='/cryptocurrencies' element={< Cryptocurrencies simplified={true} />} />
              <Route path='/exchanges' element={<Exchanges />} />
              <Route path='/news' element={< News />} />
            </Routes>
          </div>
          {/* <Cryptocurrencies /> */}
        </section>
      </main >

    </>

  )
}

export default App;
