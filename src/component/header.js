import React from 'react';

import {NavLink} from 'react-router-dom';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <div class="row">
                    <div class="btn-group-vertical btnholder">
                        <NavLink to="/"><button type="button" class="btn btn-light btn-block btncss">Home</button></NavLink>
                        <NavLink to="login"><button type="button" class="btn btn-light btncss">Login</button></NavLink>
                        <NavLink to="about"><button type="button" class="btn btn-light btncss">About</button></NavLink>
                    </div>

                </div>
            </div>
        )

    }
}