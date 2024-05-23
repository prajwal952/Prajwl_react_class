import { createStore } from "redux";
import {reducer} from '../Product-Reducer/Reducer'

export const Store= createStore(reducer,{});