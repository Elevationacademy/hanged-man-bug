import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import App from './App';
import About from './components/About';

function AppRoute() {

    return (
        <Router>
            <div className="App">
                <div id="nav">
                    <Link to='/about'>About</Link>
                    <Link to='/'>Home</Link>
                </div>
                <Route path='/' exact component={App}/>
                <Route path='/about' exact render={() => <About value="Amazing"/>} />
            </div>
        </Router>
    );
}

export default AppRoute;
