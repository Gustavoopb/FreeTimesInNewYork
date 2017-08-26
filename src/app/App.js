import Application from './navigators/MainDrawerNavigator'
import { ApplicationReducer } from './reducers/ApplicationReducer'
import { Provider } from 'react-redux'
import React from 'react'
import axios from 'axios'
import { createStore } from 'redux'

export default class App extends React.Component {
    store = createStore(ApplicationReducer)
    render() {
        return (
            <Provider store={this.store}>
                <Application />
            </Provider>
        )
    }
}

axios.defaults.baseURL = 'https://api.nytimes.com/svc';
axios.defaults.headers.common['api-key'] = '17ce5d0f117945bd902b1345a930fd3f';