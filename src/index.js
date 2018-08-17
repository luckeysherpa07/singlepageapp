import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import Login from './component/login';
import About from './component/about';
import Header from './component/header';
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path="/" component={Header}></Route>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/about" component={About}></Route>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
