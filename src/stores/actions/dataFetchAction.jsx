import { useEffect, useReducer } from 'react';
import axios from 'axios';
import dataFetchReducer from './../reducers/dataFetchReducer.jsx';

const useDataFetchAction = (initialUrl, initialData) => {

    const [state, dispatch] = useReducer(dataFetchReducer, {
        isLoading: false,
        isError: false,
        data: initialData,
    });

    useEffect(() => {
        dispatch({ type: 'FETCH_INIT' })
        axios.get(initialUrl).then(res => {
            dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
        }).catch(e => {
            dispatch({ type: 'FETCH_FAILURE' })
        })
    }, [initialUrl]);
    return { state };
};
export default useDataFetchAction;
