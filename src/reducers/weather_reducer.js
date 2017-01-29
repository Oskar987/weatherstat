import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
    switch(action.type){
        case FETCH_WEATHER:
            return [ action.payload.data, ... state ];//its completely magic!!! - this es2015 trick the same as concat function of array

    }
    return state;
}