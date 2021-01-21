import { Model } from 'wbd-frontend-kit'
export const namespace = 'login'

export interface IState {
  message: string
}

const initState: IState = {
  message: 'hello, this is from redux and page constractor',
}

export default {
  namespace,
  state: initState,
  effects: {},
  reducers: {
    setState(state, { payload }) {
      return { ...state, ...payload }
    },
  },
} as Model
