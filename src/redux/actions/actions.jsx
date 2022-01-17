import * as types from "./../actionType.jsx";
import axios from "axios";


const getUsers = (users) => ({
    type: types.GET_USERS,
    payload: users,
});

const deleteUsers = () => ({
    type: types.DELETE_USERS,
});

export const loadUsers = () => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}`).then((res) => {
            console.log("res", res);
            dispatch(getUsers(res.data));
        }).catch(err => console.log("res", res))
    }
}

export const deleteUsers = (id) => {
    return function (dispatch) {
        axios.get(`${process.env.REACT_APP_API}/${id}`).then((res) => {
            console.log("res", res);
            dispatch(deleteUsers());
        }).catch(err => console.log("res", res))
    }
}