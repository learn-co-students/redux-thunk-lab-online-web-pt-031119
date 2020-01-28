// write your CatList component here
import React from 'react';

const CatList = (props) => {

  const renderCats = props.catPics.map(pic => {
    return(<img src={pic.url} />)
  })

  return(
    <div>
      {renderCats}
    </div>
  )
}

export default CatList