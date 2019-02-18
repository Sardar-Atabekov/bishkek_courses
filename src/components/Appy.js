import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Child = ({ match }) => (
    <div>
        <h3>ID: { match.params.id}</h3>
    </div>
)

class Appy extends Component {
    render() {
        return(
            <Router>
                <div>
                    <h2>acc</h2>
                    <ul>
                        <li><Link to='/net'>net</Link></li>
                        <li><Link to='/zi'>zi</Link></li>
                        <li><Link to='/ya'>ya</Link></li>
                        <li><Link to='/mo'>mo</Link></li>
                    </ul>

                    <Route path='/:id' component={Child} />
                </div>
            </Router>
        )
    }
}
export default Appy;