import {combineReducers} from 'redux'
import { productReducer } from './ProductReducer'

export const reducer= combineReducers({productDat:productReducer})