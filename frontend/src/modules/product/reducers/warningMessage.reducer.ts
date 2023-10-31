import type { GetKeys } from '@/utilities'

export const initialState = {
  colorMessage: null,
  sizeMessage: null,
  itemsNumberMessage: null
}

export type KeyMessages = GetKeys<typeof initialState>

export interface Reducer {
  state: Record<KeyMessages, string | null>
  action: {
    type: string
    payload?: Record<string, string>
    property?: KeyMessages
  }
}

export function warningReducer(state: Reducer['state'], action: Reducer['action']) {
  switch (action.type) {
    case 'SETTED_MESSAGE': {
      return {
        ...state,
        ...action.payload
      }
    }

    case 'CLEAN_MESSAGE': {
      if (!action?.property) return { ...state }

      return {
        ...state,
        [action.property]: null
      }
    }

    default: {
      return state
    }
  }
}
