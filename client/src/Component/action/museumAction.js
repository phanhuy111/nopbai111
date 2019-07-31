import {
    FETCH_MUSEUM
} from './../constant/museumCon';


// get all museum

export const fetchMuseum = () => dispatch => {
    fetch('http://localhost:8080/api/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then(res => res.json())
        .then(museum =>
            dispatch({
                type: FETCH_MUSEUM,
                payload: museum
            }));
}