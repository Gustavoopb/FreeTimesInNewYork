import { MainDrawerNavigator } from '../navigators/MainDrawerNavigator'
import { NavigationActions } from 'react-navigation'
import { combineReducers } from 'redux'

const initialState = MainDrawerNavigator.router.getStateForAction(MainDrawerNavigator.router.getActionForPathAndParams('HomeStackNavigator'));

function movies(state = { results: [], copyright: "" }, action) {
    switch (action.type) {
        case 'MoviesResponse':

            return { ...state, ...action.data, results: state.results.concat(action.data.results) }
        case 'Option':
            return { ...state, movie: action.movie }
        case 'Clean':
            return { ...state, results: [] }
        default:
            return state;
    }
}


function nav(state = initialState, action) {
    let nextState;
    switch (action.type) {
        case 'Option':
            nextState = MainDrawerNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: 'MovieDetail', params: { movie: action.movie } }),
                state
            );
            break;
        case 'Navigate':
            nextState = MainDrawerNavigator.router.getStateForAction(
                NavigationActions.navigate({ routeName: action.routeName }),
                state
            );
            break;
        default:
            nextState = MainDrawerNavigator.router.getStateForAction(action, state);
            break;
    }

    return nextState || state;
}

export const ApplicationReducer = combineReducers({ movies, nav })