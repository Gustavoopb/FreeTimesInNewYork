import { HomeScreen } from '../screens/HomeScreen'
import { MovieDetailScreen } from '../screens/MovieDetailScreen'
import React from 'react'
import { StackNavigator } from 'react-navigation'

export const HomeStackNavigator = StackNavigator({
    Home: {
        screen: HomeScreen
    },
    MovieDetail: {
        screen: MovieDetailScreen,
        path: 'option/:movie'
    }
})