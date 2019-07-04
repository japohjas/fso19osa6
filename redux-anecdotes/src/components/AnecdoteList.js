import React from 'react'
import { connect } from 'react-redux'
import { addNotification } from '../reducers/notificationReducer'
import { addVote } from '../reducers/anecdoteReducer'

const AnecdoteList = (props) => {
  
  const vote = (id) => {
    // console.log('vote', id)
    const anecdote = props.visibleAnecdotes.find(a => a.id === id)
    props.addVote(anecdote)
    props.addNotification(`you voted '${anecdote.content}'`, 5)
  }

  const byVotes = (a,b) => b.votes - a.votes

  return (
    <div>
      {props.visibleAnecdotes.sort(byVotes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

const anecdotesToShow = ({ anecdotes, filter}) => {
  return filter === ''
    ? anecdotes
    : anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  addNotification,
  addVote
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)