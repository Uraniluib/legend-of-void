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
        const fetchData = async () => {
            dispatch({ type: 'FETCH_INIT' });
            try {
                const result = await axios.get(initialUrl);
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (error) {
                dispatch({ type: 'FETCH_FAILURE' });
            }
        };
        fetchData();
    }, [initialUrl]);
    return { state };
};
export default useDataFetchAction;
