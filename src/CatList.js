// write your CatList component here
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {

renderList = () => { return this.props.catPics.map(pic => <img key={pic.id} src={pic.url} alt={pic.id}/>)}

  render() {

    return(
    <div>
      {this.renderList()}
    </div>
    )
  }

}

export default CatList;
