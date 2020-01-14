const url = 'https://learn-co-curriculum.github.io/cat-api/cats.json'

export function fetchCats() {
    return dispatch => {
        dispatch({type: 'LOADING_CATS'})
        fetch(url)
            .then(resp => resp.json())
            .then(data => dispatch({type: 'ADD_CATS', cats: data.images}))
    }
}