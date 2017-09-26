import { createStore } from 'redux';
import allReducer from '../reducers/UserReducer'

export default function configureStore(initialState) {

    const store = createStore(
        allReducer,
        initialState,
        window.devToolsExtension ? window.devToolsExtension() : undefined
    );

  return store;
}
