import App from './App';
import Score from './components/Score';
import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';

class AppRoute extends Component {
    constructor() {
        super()
        this.state = {
            score: 100
        }
    }


    render() {
        return (
            <Router>
                <div className="App">
                    <div id="nav">
                        <Link to='/score'>Score</Link>
                        <Link to='/'>Home</Link>
                    </div>
                    <Route path='/' component={App}/>
                    <Route path='/score' component={<Score value={this.props.score}></Score>}></Route>
                </div>
            </Router>
        );
    }
}

export default AppRoute;
