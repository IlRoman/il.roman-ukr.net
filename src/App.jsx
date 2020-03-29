import React from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import { BrowserRouter } from 'react-router-dom'
import { MyContext } from './components/Header'

const App = () => {
    return (
        <MyContext.Provider>
            <BrowserRouter>
                <div className="page">
                    <Header />
                    <Navigation />
                </div>
            </BrowserRouter>
        </MyContext.Provider>
    )
}

export default App;