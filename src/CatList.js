// write your CatList component here
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {


  render() {
    const { catPics } = this.props;

    <div>
      {catPics.map(catPic => <img>{catPic}</img>)}
    </div>
  }

}
