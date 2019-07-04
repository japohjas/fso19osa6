import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {
  /*
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  */

  const palautenappi = (value) => () => {
    store.dispatch({
      type: value
    })
  }

  return (
    <div>
      <button onClick={palautenappi('GOOD')}>hyvä</button> 
      <button onClick={palautenappi('OK')}>neutraali</button> 
      <button onClick={palautenappi('BAD')}>huono</button>
      <button onClick={palautenappi('ZERO')}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali {store.getState().ok}</div>
      <div>huono {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
