
const notificationReducer = (state = null, action) => {
  console.log('notification state now: ', state)
  console.log('notification action', action)

  switch (action.type) {
    case 'NOTIFICATION':
      return action.data
    default:
      return state
      }
}

const showNotification = (content) => {
  console.log('show notification' , content)
  return {
    type: 'NOTIFICATION',
    data: content
  }
}

const hideNotification = () => {
  return {
    type: 'NOTIFICATION',
    data: null
  }  
}

export const addNotification = (content, timeout) => {
  return async dispatch => {
    dispatch(showNotification(content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, timeout * 1000)
  } 
}

export default notificationReducer