import { CONNEXION, CONNEXION_FAILURE } from './type';

export const connexionSuccess = (data) => {
    return {
        type: CONNEXION,
        payload: data
    }
}

export const connexionFailure = (error) => {
    return {
        type: CONNEXION_FAILURE,
        payload: error
    }
}

export const connexion = (user) => {

    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        .then(response => response.json())
        .then(data => {dispatch(connexionSuccess(data.body.token)); })
        .catch(error => dispatch(connexionFailure(error.message)))
    }
}