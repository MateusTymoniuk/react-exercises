const INITIAL_STATE = { value: 'Alou alou alou' }

export default (state = INITIAL_STATE, action) => {
  switch (action.type){
    case 'VALUE_CHANGED':
      return { value: action.payload }
    default:
      return state
  }
}