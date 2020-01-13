import React, { Component } from 'react';


export default class CatList extends Component {

    showPics = () =>{
        if(this.props.catPics){
            return this.props.catPics.map(pic => {
                return <img src={pic.url} alt={pic.id}/>
            })
        } else {
            return <div></div>
        }
    }

    render() {
        debugger
        return(
            <div>
                {this.showPics()}
            </div>
        )
    }
}
