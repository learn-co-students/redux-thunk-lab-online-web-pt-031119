import React from 'react'

const CatList = ({catPics}) => {
    const render = () => catPics.map(catPic => {
        return(
            <div className="cat" key={catPic.id} >
                <img src={catPic.url} alt="cat pic" />
            </div>
        )
    })
    
    return(
        <div className="cat-list">
            {render()}
        </div>
    )
}


export default CatList