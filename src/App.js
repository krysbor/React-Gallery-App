import React from 'react';
import logo from './logo.svg';
import './App.css';
import Photo from './components/Photo'
import Nav from './components/Nav'
import NotFound from './components/NotFound'
import Form from './components/Form'
import PhotoContainer from './components/PhotoContainer'
import apiKey from './config'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {

  imageUrls = []

  constructor() {
    super()
    this.state = {
      gifs: [],
      loaded: false
    }
  }

  componentDidMount() {
    this.getData('cats')
  }

  shouldComponentUpdate() {
    return true
  }


  getData = (query) => {

    this.setState({
      loaded: false
    })
    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&safe_search=1&content_type=photo&extras=url_l,url_sq&per_page=24&page=1&format=json&nojsoncallback=1`)
    .then(response => response.json()
    )
    .then(data => data.photos.photo)
    .then(data2 => {
      this.setState({
        gifs: data2,
        loaded: true
      })
    })
  }



  render() {
    return (
      <div className="container">

        <Router>
        <Form getData={this.getData} />
        <Nav getData={this.getData}/>
          <Switch>
            <Route exact path="/">
              <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} />

            </Route>
            <Route path="/cats">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} />

            </Route>
            <Route path="/dogs">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} />

            </Route>
            <Route path="/computers">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} />

            </Route>

          </Switch>
        </Router>

      </div>
    );
  }

}

export default App;
