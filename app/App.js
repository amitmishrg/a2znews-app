import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store'; //Import the store
import Main from './components/main'; //Import the component file

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
