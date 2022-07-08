import * as types from "./../actionType.jsx";
import axios from "axios";
import { ROOT_URL, GIT_API } from "../../helpers/constants.jsx";
import { encodeBase64 } from "../../helpers/utils.jsx";


const getChronicles = (chronicles) => ({
    type: types.GET_DATA,
    payload: chronicles,
});

const addChronicles = (chronicles) => ({
    type: types.ADD_DATA,
    payload: chronicles,
});

// const deleteUsers = () => ({
//     type: types.DELETE_USERS,
// });

export const loadChronicles = () => {
    return function (dispatch) {
        axios.get(`${ROOT_URL}json/chronicle.json`).then((res) => {
            console.log("response: ", res.data);
            dispatch(getChronicles(res.data));
        }).catch(err => console.log("error: ", err))
    }
}

// export const updateChronicles = (originalData, newData, headers) => {
//     return function (dispatch) {
//         originalData.push(newData);
//         const updateData = { message: "我在测试", content: encodeBase64(originalData), sha: article.data.sha };
//         axios.put(`${GIT_API}json/chronicle.json`, updateData, { headers })
//             .then((res) => {
//                 console.log("response: ", res.data);
//                 dispatch(getChronicles(res.data));
//             }).catch(err => console.log("error: ", err))
//     }
// }


// export const deleteUsers = (id) => {
//     return function (dispatch) {
//         axios.get(ROOT_URL).then((res) => {
//             console.log("res", res);
//             dispatch(deleteUsers());
//         }).catch(err => console.log("res", res))
//     }
// }