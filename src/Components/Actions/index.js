import Axios from "axios";
import { GET_DATA_SUCCESS,GET_DATA_ERROR,GET_DATA_REQUEST } from "./action";

const url = 'https://fakestoreapi.com/products';

export const getData = () => {
    return dispatch => {
        dispatch({
            type: GET_DATA_REQUEST
        });
        return Axios.get(url)
        .then(res => {
            dispatch({
                type: GET_DATA_SUCCESS,
                payload: res.data
            });
        })
        .catch(error => {
            dispatch({
                type: GET_DATA_ERROR,
                payload: ''
            });
        });
    };
};