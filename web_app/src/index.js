import React from 'react';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/ConfigureStore';

const state = {
    Users: [
        {
            first: 'Daniel',
            last: 'Toofer',
            address: '306 S. Medio Dr.'
        },
        {
            first: 'Benjamin',
            last: 'Toofer',
            address: '6343 E. Girard Ave.'
        }
    ]
}

const store = configureStore(state);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
