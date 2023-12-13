import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contect from './Contect'
import Navbar from './Navbar'
import Error from './Error'
import Mobile from './Mobile'

const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
                <Routes>
                   <Route path='/' element={<Home />} />
                   <Route path='/about' element={<About />} />
                   <Route path='/contect' element={<Contect />} />
                   <Route path='/product/:mobile' element={<Mobile />} />
                   <Route path='*' element={<Error />} />

                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default App
