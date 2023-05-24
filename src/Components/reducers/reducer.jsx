import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from "../Actions/action";

const initailState = {
    data: [],
    loading: false,
    error: ''
};

export default function reducer(state = initailState, action = {}) {
    switch(action.type){
        case GET_DATA_REQUEST:
            return {...state,
                data: [],
                loading: true,
                error: ''
            }
        case GET_DATA_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false,
                error: ''
            }
            case GET_DATA_ERROR:
                return {
                    ...state,
                    data: [],
                    loading: false,
                    error: 'Error in getting data, Please cheack api.'
                }
                default:
                    return initailState;
    }
}