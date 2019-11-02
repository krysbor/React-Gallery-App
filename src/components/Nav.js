import React from 'react'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  import Form from './Form'

function Nav(props) {

    return (
        <nav className="main-nav">
            <ul>
                <li><Link to="/cats" onClick={e => {props.getData('cats')}}>Cats</Link></li>
                <li><Link to="/dogs" onClick={e => {props.getData('dogs')}}>Dogs</Link></li>
                <li><Link to="/computers" onClick={e => {props.getData('computers')}}>Computers</Link></li>
            </ul>
        </nav>


    )
}

export default Nav