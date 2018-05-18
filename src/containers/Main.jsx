import React, {Component} from 'react'
import {
    Route,
    Link, browserHistory
} from 'react-router-dom';
import Home from './Home.jsx'
import About from './About.jsx'
import Topic from './Topic.jsx'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/topic" component={Topic}/>
            </div>
        )
    }
}

