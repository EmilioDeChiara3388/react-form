import { useState } from 'react'
import AppHeader from './components/AppHeader'
import './App.css'

const initialArticles = []

function App() {

  const [articles, setArticles] = useState(initialArticles)
  const [newArticle, setNewArticle] = useState("")

  function addArticle(e) {
    e.preventDefault()
    console.log(articles);
    setArticles([...articles, newArticle])
  }

  return (
    <>
      <AppHeader />
      <div className="container">
        <form onSubmit={addArticle} className='my-3'>
          <div className="mb-3">
            <label htmlFor="Articolo" className="form-label">Articoli</label>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Digita titolo Articolo" aria-label="Titolo Articolo" aria-describedby="button-addon2"
                value={newArticle} onChange={e => setNewArticle(e.target.value)} />
              <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Aggiungi</button>
            </div>

            <small id="articoloHelperId" className="form-text text-muted">Inserisci titolo articolo</small>
          </div>
        </form>
        <ul className="list-group">
          {articles.map((article, index) => <li key={index} className="list-group-item">{article}</li>)}
        </ul>

      </div>
    </>
  )
}

export default App
