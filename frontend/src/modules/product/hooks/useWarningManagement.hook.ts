import { useReducer } from 'react'
import { initialState, type KeyMessages, warningReducer, type Reducer } from '../reducers'

export const useWarningManagement = () => {
  const [state, dispatch] = useReducer(warningReducer, initialState)

  const addWarningMessageHandler = (payload: Reducer['action']['payload']) =>
    dispatch({ type: 'SETTED_MESSAGE', payload })
  const clearWarningMessageHandler = ({ property }: { property: KeyMessages }) =>
    dispatch({ type: 'CLEAN_MESSAGE', property })

  return {
    warnings: state,
    addWarning: addWarningMessageHandler,
    clearWarning: clearWarningMessageHandler
  }
}
