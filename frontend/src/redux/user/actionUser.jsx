import { CONNEXION, CONNEXION_FAILURE, GET_DATA_USER, GET_DATA_FAILED, MODIFY_DATA_USER, MODIFY_FAILURE, LOGOUT } from './type';

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

export const getDataUser = (data) => {
    return {
        type: GET_DATA_USER,
        payload: data
    }
}

export const getDataFailed = (error) => {
    return {
        type: GET_DATA_FAILED,
        payload: error
    }
}

export const successModify = (data) => {
    return {
        type: MODIFY_DATA_USER,
        payload: data
    }
}

export const failureModify = (error) => {
    return {
        type: MODIFY_FAILURE,
        payload: error
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
    }
}

export const modifyDatasUser = (token, data) => {
    return dispatch => {
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => dispatch(successModify(data.body)) )
        .catch(error => dispatch(failureModify(error)))
    }
}

export const getFetchDataUser = (token) => {
    
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/user/profile", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        .then(response => response.json())
        .then(data => dispatch(getDataUser(data.body)))
        .catch(error => dispatch(getDataFailed(error)))
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
        .then(data => dispatch(connexionSuccess(data.body.token)))
        .catch(error => dispatch(connexionFailure(error)))
    }
}