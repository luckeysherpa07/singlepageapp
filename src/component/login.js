import React from 'react';

export default class Login extends React.Component{
    render() {
        return (
            <div>
                <div class="row">
                    <h2>Login</h2>
                </div>
                <div class="row">
                        <label>Email</label><br />
                        <input class="form-control" type="email"></input> <br />

                        <label>Password</label><br />
                        <input class="form-control" type="password" w></input><br />

                        <input type="submit" value="submit"></input>
                </div>
            </div>
        )

    }
}