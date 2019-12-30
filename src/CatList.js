import React from 'react'

const CatList = (props) => {
    //debugger 
    const renderCats = props.catPics.map((pic, index) => <img key={index} ref={imageRef} src={pic.url} />)
    const imageRef = React.createRef()

    return (
        <div>
            {renderCats}
        </div>
    )
}

export default CatList 