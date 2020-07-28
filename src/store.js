import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import history from './history';
import createRootReducer from './reducers';

const enhancers = [
    window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__
];

export default function configureStore(preloadedState) {
    const store = createStore(
        createRootReducer(history),
        preloadedState,
        ...enhancers,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            )
        )
    )
    
    return store;
}