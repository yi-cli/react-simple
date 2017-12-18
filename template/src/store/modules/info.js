/**
 * @description Use Ducks Redux Reducer Bundles https://github.com/erikras/ducks-modular-redux
 */
export const types = {
  GET_INFO: 'GET_INFO'
}

export const initState = {
  user: 'yuyi',
  info: 'HelloWorld'
}

export default (state = initState, action = {}) => {
  switch(action.type) {
    case types.GET_INFO:
      return { ...state }
    default:
      return state
  }
}

export function getInfo() {
  return ({ type: types.GET_INFO })
}