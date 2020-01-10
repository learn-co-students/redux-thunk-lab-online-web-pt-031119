import React, { Component } from 'react'

export default class CatList extends Component {

        listCats = () => {
           return this.props.catPics.map((cat) => <img key={cat.id} src={cat.source_url} alt={cat.id}></img>)
        }

        render() { console.log(this.props)
        return (
            <div>
                {this.listCats()}
            </div>
        )
    }
}
