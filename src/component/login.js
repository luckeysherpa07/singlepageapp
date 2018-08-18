import React from 'react';

export default class Login extends React.Component{
    render() {
        return (
            <div>
                <div class="row">
                    <h2>Login</h2>
                </div>
                <div class="row">
                    <blockquote class="blockquote text-center">
                        <label>Email</label><br />
                        <input type="email"></input> <br />

                        <label>Password</label><br />
                        <input type="password"></input><br />

                        <input type="submit" value="submit"></input>

                    </blockquote>
                </div>
            </div>
        )

    }
}