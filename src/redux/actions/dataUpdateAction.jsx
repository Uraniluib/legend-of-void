import { useEffect, useReducer } from 'react';
import axios from 'axios';
// import dataUpdateReducer from './../reducers/dataUpdateReducer.jsx';

const dataUpdateAction = async (initialUrl, initialData, updateData, headers) => {

    try {
        await axios.put(initialUrl, updateData, { headers })
            .then(
                response => console.log("res" + response.data)
            );
            return updateData
        // const result = await axios.put(initialUrl);
        // dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
    } catch (error) {
        // dispatch({ type: 'FETCH_FAILURE' });
        console.log("err" + error)
    }
};
export default dataUpdateAction;