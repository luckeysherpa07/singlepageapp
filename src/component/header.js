import React from 'react';

import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <div class="row centeralign">
                    <NavLink to="/" style={{ textDecoration: 'none' }}><h2>namespace;</h2></NavLink>
                </div>
                <div class="row">
                    <div class="btn-group-vertical btnholder">
                        <NavLink to="/" style={{ textDecoration: 'none' }}><h4>0 0 1 | home</h4></NavLink>
                        <NavLink to="login" style={{ textDecoration: 'none' }}><h4>0 0 2 | login</h4></NavLink>
                        <NavLink to="about" style={{ textDecoration: 'none' }}><h4>0 0 3 | about</h4></NavLink>
                    </div>

                </div>
            </div>
        )

    }
}