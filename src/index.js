import React from 'react';
import ReactDOM from 'react-dom';
import Home from './component/home';
import Login from './component/login';
import About from './component/about';
import Header from './component/header';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { AnimatedSwitch } from 'react-router-transition';

ReactDOM.render(
    <BrowserRouter>
        <div class="container box-layout">
            <div class="row">
                <div class="col content-left">
                    <div class="content-box">
                        <Route path="/" component={Header}></Route>
                    </div>
                </div>
                <div class="col-7 content-right">
                    <div class="content-box">
                        <AnimatedSwitch
                            atEnter={{ opacity: 0, damping: 22 }}
                            atLeave={{ opacity: 0, damping: 22 }}
                            atActive={{ opacity: 1, damping: 22 }}
                            className="switch-wrapper"
                        >
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/about" component={About}></Route>
                        </AnimatedSwitch>
                    </div>
                </div>
            </div>
        </div>
    </BrowserRouter>,
    document.getElementById('root'));
