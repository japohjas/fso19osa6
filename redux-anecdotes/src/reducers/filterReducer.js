
const filterReducer = (state = '' , action) => {
  console.log('filter state now: ', state)
  console.log('filter action', action)
  
  switch (action.type) {
    case 'FILTER':
      return action.data
    default:
      return state
    }
  }
  
  export const filter = (value) => {
    return {
      type: 'FILTER',
      data: value
    }
  }
  
  export default filterReducer