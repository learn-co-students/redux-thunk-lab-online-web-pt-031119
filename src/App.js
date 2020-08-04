import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchCats } from './actions/catActions'
import CatList from './CatList'

class App extends Component {   

  componentDidMount() {
    console.log('props:', this.props)
    this.props.fetchCats()
  }
  
  render() {
    console.log('cat pics: ', this.props.catPics)
    return (
      <div className="App">
        <h1>CatBook</h1>
        {this.props.loading ? "Loading..." : null}
        <CatList catPics={this.props.catPics} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCats: () => dispatch(fetchCats())
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(App)

