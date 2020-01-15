// write your CatList component here
import React, { Component } from 'react';
import { connect } from 'react-redux';

class CatList extends Component {

const renderList() = this.props.catPics.map(pic => <img key={pic.id} src={pic.url}>{pic}</img>)

  render() {


    <div>

    </div>
  }

}
