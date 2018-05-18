import React, {Component} from 'react'
import history from "../lib/history";
import styled from 'styled-components'
import '../static/css/header.scss'

import {
    Route,
    Link,
} from 'react-router-dom';

const _Header = styled.ul`
    background: red;
    li {
        color: #999;
        a {
            color: #FFF;
        }
    }
`
export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    linkTo(link) {
        console.log(link);
        history.replace('/topic')
    }

    render() {
        return (
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topic">Topic</Link></li>
                <li onClick={this.linkTo.bind(this, 'a')}>jsTo</li>
            </ul>
        )
    }
}

