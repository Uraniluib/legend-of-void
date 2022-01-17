import * as types from "./../actionType.jsx";
import axios from "axios";


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const userDelete = () => ({
    type: types.DELETE_USERS,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            console.log("response: ", res);
            dispatch(getUsers(res.data));
        }).catch(err => console.log("error: ", err))
    }
}

export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log("response: ", res);
            dispatch(userDelete());
        }).catch(err => console.log("error: ", err))
    }
}