// write your CatList component here

import React, { Component } from 'react'

export default class CatList extends Component {
    render() {
       const listCats = () => {
            return this.props.catPics.map((cat) => <img key={cat.id} src={cat.url} />)
        }
       
        return (
            <div>
                {listCats()}
            </div>
        )
    }
}
