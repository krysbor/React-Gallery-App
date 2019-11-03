import React from 'react';

import './App.css';

import Nav from './components/Nav'

import Form from './components/Form'
import PhotoContainer from './components/PhotoContainer'
import apiKey from './config'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends React.Component {

  imageUrls = []

  constructor() {
    super()
    this.state = {
      gifs: [],
      loaded: false,
      searchValue: ''
    }
  }

  componentDidMount() {
    this.getData('pictures')
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

  handleSearch = (query, searchValue) => {
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
        loaded: true,
        searchValue: searchValue
      })
    })
  }



  render() {
    return (
      <div className="container">

        <Router>
        <Form handleSearch={this.handleSearch} />
        <Nav getData={this.getData}/>
          <Switch>



            <Route exact path="/">
              <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} results={'random results'} search={false} />

            </Route>
            <Route path="/cats">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} results={'cats'} search={false} />

            </Route>
            <Route path="/dogs">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} results={'dogs'} search={false} />

            </Route>
            <Route path="/computers">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} results={'computers'} search={false} />

            </Route>

            <Route path="/:value">
             <PhotoContainer data={this.state.gifs} loaded={this.state.loaded} search={true} results={this.state.searchValue} />

            </Route>


          </Switch>
        </Router>

      </div>
    );
  }

}

export default App;
