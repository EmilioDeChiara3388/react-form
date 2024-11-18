import { useState } from 'react'
import AppHeader from './components/AppHeader'
import './App.css'

const articles = []

function App() {


  return (
    <>
      <AppHeader />
      <div className="container">
        <form className='my-3'>
          <div className="mb-3">
            <label htmlFor="Articolo" className="form-label">Articoli</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Digita titolo Articolo" aria-label="Titolo Articolo" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
            </div>

            <small id="articoloHelperId" className="form-text text-muted">Inserisci titolo articolo</small>
          </div>
        </form>
        <ul className="list-group">
          <li className="list-group-item">Articolo 1</li>
          <li className="list-group-item">Articolo 2</li>
          <li className="list-group-item">Articolo 3</li>
        </ul>

      </div>
    </>
  )
}

export default App
