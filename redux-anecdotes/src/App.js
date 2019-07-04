import React from 'react'
import  { useEffect } from 'react' 
import { connect } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { initializeAnecdotes } from './reducers/anecdoteReducer'


const App = (props) => {

  useEffect(() => {
    props.initializeAnecdotes()
  }, [])  
  /* 
  React Hook useEffect has a missing dependency: 'props'
  Jos toisena parametrina on tyhjä taulukko [], 
  suoritetaan efekti ainoastaan komponentin ensimmäisen renderöinnin jälkeen.
  https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect
  */   
  
  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter />
      <Notification />
      <AnecdoteForm />
      <AnecdoteList />
    </div>
  )
}

export default connect(null, { initializeAnecdotes })(App) 
