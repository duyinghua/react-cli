import React, {Component} from 'react'
import {Provider} from 'react-redux'
import store from '../redux/configureStore'
import {
    BrowserRouter as Router,
    Route,
    Link,
    browserHistory
} from 'react-router-dom';

import Home from './Home.jsx'
import About from './About.jsx'
import Topic from './Topic.jsx'
export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={browserHistory}>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/topic">Topic</Link></li>
                        </ul>

                        <hr/>
                        <Route path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/topic" component={Topic}/>
                    </div>
                </Router>
            </Provider>
        )
    }
}
