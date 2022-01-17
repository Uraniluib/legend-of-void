import * as types from "./../actionType.jsx";
import axios from "axios";
import { ROOT_URL } from "../../helpers/constants.jsx";


const getChronicles = (chronicles) => ({
    type: types.GET_DATA,
    payload: chronicles,
});

// const deleteUsers = () => ({
//     type: types.DELETE_USERS,
// });

export const loadChronicles = () => {
    return function (dispatch) {
        axios.get(`${ROOT_URL}/json/chronicle.json`).then((res) => {
            console.log("response: ", res.data);
            dispatch(getChronicles(res.data));
        }).catch(err => console.log("error: ", err))
    }
}


// export const deleteUsers = (id) => {
//     return function (dispatch) {
//         axios.get(ROOT_URL).then((res) => {
//             console.log("res", res);
//             dispatch(deleteUsers());
//         }).catch(err => console.log("res", res))
//     }
// }