import React from 'react'
import './App.css'
import {BrowserRouter, Routes,  Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'
import ExpensePage from '../pages/Expense'
import IncomesPage from '../pages/Income'
import Settings from '../pages/settings'
import ListPage from '../pages/List'
import File from '../pages/List'
import Signup from '../pages/signup'

import { createContext, useState } from 'react'


export const ThemeContext = createContext()

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () =>{
    setTheme((curr) => (curr ==='light'? 'dark': 'light'))
  }

  return (
    <>
      <div className={theme}>
        <ThemeContext.Provider value={[theme, toggleTheme]}>
          
          <div id={theme}>
            <BrowserRouter>
              <Routes className='Pages' >
                <Route index element={<Signup/>}/>
                <Route path='/home' element={<Homepage/>}/>
                <Route path='/expense' element={<ExpensePage/>} />
                <Route path='/income' element={<IncomesPage/>} />
                <Route path='/setting' element={<Settings/>} /> 
                <Route path='/list' element={<ListPage/>} />
                <Route path='/file' element={<File/>} />
              </Routes> 
            </BrowserRouter> 
          </div>
        </ThemeContext.Provider>
      </div>
    </>
  )
}

export default App
