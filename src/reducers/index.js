import { combineReducers } from 'redux';
import Weatherreducer from './weather_reducer';

const rootReducer = combineReducers({
  weather: Weatherreducer
});

export default rootReducer;
