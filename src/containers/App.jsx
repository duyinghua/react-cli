import React, {Component} from 'react'

import Header from './Header.jsx'
import Main from './Main.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <hr/>
                <Main />
            </div>
        )
    }
}