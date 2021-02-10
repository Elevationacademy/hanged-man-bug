import App from './App';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import About from './components/About';

class AppRoute extends Component {

    render() {
        return (
            <Router>
                <div className="App">
                    <div id="nav">
                        <Link to='/about'>About</Link>
                        <Link to='/'>Home</Link>
                    </div>
                    <Route path='/' component={App}/>
                    <Route path='/about' component={<About value="Amazing"></About>}></Route>
                </div>
            </Router>
        );
    }
}

export default AppRoute;
