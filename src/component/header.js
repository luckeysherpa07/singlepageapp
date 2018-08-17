import React from 'react';
import Home from './home';
import Login from './login';
import About from './about';

import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <h2>This is Header</h2>
                <ul>
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="login">Login</NavLink></li>
                    <li><NavLink exact to="about">About</NavLink></li>
                </ul>
                {this.props.childern}
            </div>
        )

    }
}