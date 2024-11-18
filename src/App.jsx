import { useState } from 'react'
import AppHeader from './components/AppHeader'
import './App.css'


function App() {


  return (
    <>
      <AppHeader />
      <div className="container">
        <form>
          <div className="mb-3">
            <label htmlFor="Articolo" className="form-label">Articoli</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Digita titolo Articolo" aria-label="Titolo Articolo" aria-describedby="button-addon2" />
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">Aggiungi</button>
            </div>

            <small id="articoloHelperId" className="form-text text-muted">Inserisci titolo articolo</small>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
