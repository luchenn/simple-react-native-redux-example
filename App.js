import React, {Component} from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './src/reducers';
import CounterApp from './src/screens/counterApp';

const store = createStore(reducers);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <CounterApp/>
            </Provider>
        );
    }
}
