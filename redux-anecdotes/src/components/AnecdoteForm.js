import React from 'react'
import { connect } from 'react-redux'
import { createNewAnecdote } from '../reducers/anecdoteReducer'
import { addNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createNewAnecdote(content)    
    props.addNotification(content, 5)
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote} >
        <div><input name='anecdote'/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default connect(
  null,
  { createNewAnecdote, addNotification }
)(AnecdoteForm)